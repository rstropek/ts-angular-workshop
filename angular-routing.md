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
<!--#include file="angular/0040-routing/src/app/app-routing.module.ts" -->
```


<!-- .slide: class="left" -->
## Add *Routing Module* to Main Module

```
<!--#include file="angular/0040-routing/src/app/app.module.ts" -->
```


<!-- .slide: class="left" -->
## Router Links

```
<!--#include file="angular/0040-routing/src/app/welcome.component.ts" -->
```


<!-- .slide: class="left" -->
## Processing Route Parameters

```
<!--#include file="angular/0040-routing/src/app/customer-details.component.ts" -->
```


<!-- .slide: class="left" -->
## Further Readings and Exercises

* Exercises
  * [*PokeList* exercise](https://github.com/rstropek/ts-angular-workshop/tree/master/angular/9090-router)
  