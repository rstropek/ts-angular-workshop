import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { first } from "rxjs/operators";
import { GetFilms } from './__generated__/GetFilms';

// Read more about type generation at https://www.apollographql.com/blog/tooling/apollo-codegen/typescript-graphql-code-generator-generate-graphql-types/

@Component({
  selector: 'app-root',
  template: `
    <h1>Star Wars Films</h1>

    <p>
      Data is read via GraphQL from 
      <a href="https://graphql.org/swapi-graphql">https://graphql.org/swapi-graphql</a>.
    </p>

    <table *ngIf="films">
      <thead>
        <tr>
          <th>Film</th>
          <th>Director</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let f of films.allFilms?.films">
          <td>{{ f?.title }}</td>
          <td>{{ f?.director }}</td>
        </tr>
      </tbody>
    </table>

    <router-outlet></router-outlet>
  `,
  styles: [`
    td, th { border: 1px solid black; text-align: left; padding: 5px; }
    table { border-collapse: collapse; }
    th { background-color: lightgray; }

  `]
})
export class AppComponent implements OnInit {
  constructor(private apollo: Apollo) {
  }

  films?: GetFilms;

  ngOnInit() {
    this.apollo.watchQuery<GetFilms>({
      query: gql`
      query GetFilms {
        allFilms {
          films {
            title
            director
          }
        }
      }
    `
    })
      .valueChanges
      .pipe(first())
      .subscribe(
        ({ data }) => this.films = data,
        () => {}, 
        () => console.log('done'));
  }
}
