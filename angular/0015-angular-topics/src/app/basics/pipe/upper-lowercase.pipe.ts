import { Pipe, PipeTransform, Component } from '@angular/core';

@Pipe({
  name: 'upperLowercase'
})
export class UpperLowercasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      const valueString = value.toString();
      return valueString.substring(0, 1).toUpperCase() + valueString.substring(1);
    } else {
        return '';
    }
  }
}

@Component({
  selector: 'app-pipe-demo',
  template: `
      <h3>Custom Pipe Demo</h3>
      <input type="text" placeholder="enter lowercase name" [(ngModel)]="name">
      {{ name | upperLowercase }}
  `
})
export class CustomPipeDemoComponent {
  public name: string;
}
