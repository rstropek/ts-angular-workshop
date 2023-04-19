import { Component } from '@angular/core';

// Note that ConverterComponent is a standalone component imported
// from the library "converter".
import { ConverterComponent } from 'projects/converter/src/public-api';

@Component({
  standalone: true,
  template: '<convlib-converter></convlib-converter>',
  imports: [ConverterComponent]
})
export class TemperatureComponent {

}
