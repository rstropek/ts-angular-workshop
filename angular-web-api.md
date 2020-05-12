# Angular Web APIs

Introduction to [Angular Web APIs](https://angular.io/guide/http)


<!-- .slide: class="left" -->
## Consuming Web APIs

* Use module `HttpClientModule`
* Read more in [Angular docs...](https://angular.io/guide/http)

```
...
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ ..., HttpClientModule, ... ],
  declarations: ...,
  bootstrap: ...
})
export class AppModule {}
```


<!-- .slide: class="left" -->
## Consuming Web APIs

Get instance of `HttpClient` in constructor (*Dependency Injection*)

```
...
import { HttpClient } from '@angular/common/http';

@Component(...)
export class MyComponent {
  constructor(private http: HttpClient) { ... }
  ...
}
```


<!-- .slide: class="left" -->
## Consuming Web APIs

```
<!--#include file="angular/0020-http-client/app.component.ts" -->
```


<!-- .slide: class="left" -->
## Consuming Web APIs

```
<!--#include file="angular/0020-http-client/app.component.html" -->
```


<!-- .slide: class="left" -->
## Consuming Web APIs

| Method   | Docs link
|----------|----------------------------------------------------------
| `get`    | [Read more...](https://angular.io/api/common/http/HttpClient#get)
| `post`   | [Read more...](https://angular.io/api/common/http/HttpClient#post)
| `patch`  | [Read more...](https://angular.io/api/common/http/HttpClient#patch)
| `put`    | [Read more...](https://angular.io/api/common/http/HttpClient#put)
| `delete` | [Read more...](https://angular.io/api/common/http/HttpClient#delete)


<!-- .slide: class="left" -->
## Further Readings and Exercises

* Exercises
  * [*ToDo* exercise](https://github.com/rstropek/ts-angular-workshop/blob/master/angular/9020-ng-todo/readme.md)
  