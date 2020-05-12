# Angular Template-Driven Forms

Introduction to [Angular Template-Driven Forms](https://angular.io/guide/forms)


<!-- .slide: class="left" -->
## Template & Data Binding

| Syntax                       | Description
|------------------------------|----------------------------------------------------------
| `{{title}}`                  | One-way binding from data source to view ([interpolation](https://angular.io/guide/template-syntax#interpolation----))
| `{{1 + 1}}`                  | One-way binding with [template expression](https://angular.io/guide/template-syntax#template-expressions)
| `[hidden]="!isValid()"`      | One-way data binding to property ([property binding](https://angular.io/guide/template-syntax#property-binding--property-))

* [Avoid side-effects](https://angular.io/guide/template-syntax#avoid-side-effects)!


<!-- .slide: class="left" -->
## Template & Data Binding

| Syntax                            | Description
|-----------------------------------|----------------------------------------------------------
| `(click)="onSave()"`              | One-way event binding from element to component ([event binding](https://angular.io/guide/template-syntax#event-binding---event-))
| `<input [(ngModel)]="firstName">` | Two-way binding ([*ngModel*](https://angular.io/guide/template-syntax#ngModel))


<!-- .slide: class="left" -->
## *Forms* Module

> For two-way binding you need the `FormsModule`

```
...
import { FormsModule } from '@angular/forms'
...
@NgModule({
  ...
  imports: [
    ..., FormsModule, ...
  ], ...
})
export class AppModule { }
```


<!-- .slide: class="left" -->
## Template & Data Binding

* Define HTML *layout* and *structure*
* Prefixed with `*`

| Syntax                       | Description
|------------------------------|----------------------------------------------------------
| `*ngFor="let i of items"`    | Repeater directive ([*ngForOf*](https://angular.io/guide/template-syntax#ngforof))
| `*ngIf="len > 3"`            | Conditional display ([*ngIf*](https://angular.io/guide/template-syntax#ngif))
| `ngSwitch`/`*ngSwitchCase`   | Conditional display ([example](https://angular.io/guide/template-syntax#ngSwitch))


<!-- .slide: class="left" -->
## Template & Data Binding

| Syntax                       | Description
|------------------------------|----------------------------------------------------------
| `[class]="errorClass"`       | Replacement [class binding](https://angular.io/guide/template-syntax#class-binding)
| `[class.error]="hasError()"` | Toggling [class binding](https://angular.io/guide/template-syntax#class-binding)
| `[style.color]="hasError() ? 'red' : 'green'"` | [Style binding](https://angular.io/guide/template-syntax#style-binding)


<!-- .slide: class="left" -->
## Template & Data Binding

| Syntax                                     | Description
|--------------------------------------------|----------------------------------------------------------
| `{{ birthday ` &#124; ` date:'longDate'}}` | [Pipe](https://angular.io/guide/template-syntax#the-pipe-operator---) operator

* [Built-in pipes](https://angular.io/guide/pipes#built-in-pipes)
* Advanced topic: Building [custom pipes](https://angular.io/guide/pipes#custom-pipes)


<!-- .slide: class="left" -->
## Advanced Template & Data Binding

* [HTML attributes vs. DOM properties](https://angular.io/guide/template-syntax#html-attribute-vs-dom-property)
* [Template reference variables](https://angular.io/guide/template-syntax#template-reference-variables--var-)
* [*Input* and *Output* properties](https://angular.io/guide/template-syntax#input-and-output-properties)


<!-- .slide: class="left" -->
## Recap: SVG

* [*Scalable Vector Graphics*](https://developer.mozilla.org/en-US/docs/Web/SVG)
  * [SVG Guide](https://svgontheweb.com/)
* Vector graphics in browsers
* Great tool support (e.g. [Inkscape](https://inkscape.org/))
* Great community resources
  * CC0 images (use e.g. Google image search to find them on the internet)
  * Libraries (e.g. [d3](https://d3js.org/), [SnapSVG](http://snapsvg.io/))
* CSS styling and animations ([samples](https://www.hongkiat.com/blog/svg-animations/))
* Works well with Angular
  * Can be used nearly exactly like HTML elements
  * Data binding for SVG attributes: Use Angular's [attribute bindings](https://angular.io/guide/template-syntax#attribute-binding)
* [SVG element reference on MDN...](https://developer.mozilla.org/en-US/docs/Web/SVG/Element)


<!-- .slide: class="left" -->
## Flex Layout

* Create simple grid layouts for web apps with ease
* Based on [Flexbox CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
* Angular module available ([*@angular/flex-layout*](https://github.com/angular/flex-layout))
  * [Video of *AngularConnect* talk](https://youtu.be/geqjUtKJX5s)
* See [interactive demo](https://tburleson-layouts-demos.firebaseapp.com/#/docs) ([source code](https://github.com/angular/flex-layout/tree/master/src/apps/demo-app/src/app)) to learn functionality
* See also [*conference agenda sample*](https://github.com/rstropek/ts-angular-workshop/tree/master/angular/9120-conference-agenda) in this course's GitHub repository


<!-- .slide: class="left" -->
## Flex Layout

```
<h2>Static Layout</h2>
<div fxLayout="row">
    <button>E1</button><button>E2</button><button>E3</button>
</div>

<h2>Data Binding</h2>
<button (click)="rowColumnLayout = rowColumnLayout == 'column' ? 'row' : 'column'">
    Switch layout</button>
<div [fxLayout]="rowColumnLayout">
    <button>E1</button><button>E2</button><button>E3</button>
</div>

<h2>Nested Layout</h2>
<div fxLayout="column">
    <button>E1</button>
    <div fxLayout="row">
        <button fxFlex="100px">E2.1</button><button fxFlex="grow">E2.2</button>
    </div>
    <button>E3</button>
</div>
```


<!-- .slide: class="left" -->
## Flex Layout

```
<h1>Ordering</h1>

<h2>Static Ordering</h2>
<div fxLayout="row">
    <button fxFlexOrder="1">Element 1</button>
    <button fxFlexOrder="3">Element 3</button>
    <button fxFlexOrder="2">Element 2</button>
</div>

<h2>Data Binding</h2>
<button (click)="element3Order = element3Order == 30 ? 15 : 30">Switch order</button>
<div fxLayout="row">
    <button fxFlexOrder="10">Element 1</button>
    <button [fxFlexOrder]="element3Order">Element 3</button>
    <button fxFlexOrder="20">Element 2</button>
</div>
```


<!-- .slide: class="left" -->
## Further Readings and Exercises

* Want to know more? Read/watch...
  * [Angular Documentation](https://angular.io/docs)
  * [Angular Tutorial](https://angular.io/tutorial)
  * [Angular Cheat Sheet](https://angular.io/guide/cheatsheet)
* Exercises
  * [*Turmrechnen* exercise](https://github.com/rstropek/ts-angular-workshop/blob/master/angular/9010-turmrechnen/readme.md)
  * [*Angular Dashboard* exercise](https://github.com/rstropek/ts-angular-workshop/blob/master/angular/9050-svg/readme.md)
  * [Introduction in RxJS](https://github.com/rstropek/ts-angular-workshop/blob/master/angular/0030-rxjs/)