# Angular Routing

Introduction to [Angular Routing](https://angular.io/guide/router)


<!-- .slide: class="left" -->
## Routing

* Angular supports navigating between *client-side views* using the URL
* Support passing parameters in the URL
  * Path
  * Query
* [`base` element](https://developer.mozilla.org/en-US/docs/HTML/Element/base-redirect-2?redirect=no) defines the base URL for all relative URLs
* Uses HTML5's [*push state* functionality](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries) in the background
  * Can be changed to *hash URLs* for older browsers if necessary
  * See also [`LocationStrategy`](https://angular.io/api/common/LocationStrategy)
* Generate new Angular app including router with `--routing` switch in CLI
  * Example: `ng new <your app name> --routing`


<!-- .slide: class="left" -->
## Setup *Routing Module*

```
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerDetailsComponent} from './customer-details.component';
import {CustomerListComponent} from './customer-list.component';
import {WelcomeComponent} from './welcome.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/:id', component: CustomerDetailsComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
```


<!-- .slide: class="left" -->
## Add *Routing Module* to Main Module

```
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerDetailsComponent} from './customer-details.component';
import {CustomerListComponent} from './customer-list.component';
import {WelcomeComponent} from './welcome.component';

@NgModule({
  declarations: [
    AppComponent, WelcomeComponent, CustomerListComponent,
    CustomerDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```


<!-- .slide: class="left" -->
## Router Links

```
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <h2>Welcome</h2>
    <ul>
      <li><a routerLink="/customers">Customer List</a></li>
      <li><a routerLink="/customers/123">Details about customer 123</a></li>
    </ul>`
})
export class WelcomeComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
```


<!-- .slide: class="left" -->
## Processing Route Parameters

```
import 'rxjs/Rx';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-customer-details',
  template: `<h2>Customer Details for Customer {{ customerID | async }}</h2>
  <ul>
    <li><a routerLink="/welcome">Welcome</a></li>
    <li><a routerLink="/customers/123">Details about customer 123</a></li>
    <li><a routerLink="/customers/456">Details about customer 456</a></li>
  </ul>`
})
export class CustomerDetailsComponent implements OnInit {
  public customerID: Observable<string>;
  constructor(private route: ActivatedRoute) { console.log('Created...'); }
  ngOnInit() { this.customerID = this.route.paramMap.map(param => param.get('id')); }
}
```


<!-- .slide: class="left" -->
## Further Readings and Exercises

* Exercises
  * [*PokeList* exercise](https://github.com/rstropek/ts-angular-workshop/tree/master/angular/9090-router)
  