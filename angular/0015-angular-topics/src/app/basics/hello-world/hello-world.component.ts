import { Component, OnInit } from '@angular/core';

// This is a very simple component to demonstrate the basics. Note how
// the template uses interpolation to show a component property. For
// details see https://angular.io/guide/displaying-data#showing-component-properties-with-interpolation

@Component({
  selector: 'app-hello-world',
    template: '<h3>Hello {{title}}!</h3>'
})
export class HelloWorldComponent {
  public title = 'World';

  constructor() { }
}
