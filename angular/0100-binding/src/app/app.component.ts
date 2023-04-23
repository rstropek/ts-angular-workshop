import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  styles: [`
    header { margin-bottom: 20px; }
    header a:not(:first-child) { margin-left: 10px; }
  `],
  template: `
    <header>
      <a routerLink="/func-pipes">Functions and Pipes</a>
      <a routerLink="/on-push">On Push</a>
      <a routerLink="/reactive">Reactive</a>
    </header>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
