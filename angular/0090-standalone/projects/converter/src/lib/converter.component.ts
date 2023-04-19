import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConverterService } from './converter.service';

@Component({
  standalone: true,
  selector: 'convlib-converter',
  imports: [ReactiveFormsModule],
  providers: [ConverterService],
  templateUrl: './converter.component.html',
})
export class ConverterComponent {
  constructor(private converter: ConverterService) {
    this.convert();
  }

  formGroup = new FormGroup({
    degreeCelsius: new FormControl(30),
  });
  degreeFahrenheit = 0;

  convert() {
    this.degreeFahrenheit = this.converter.celsiusToFahrenheit(this.formGroup.controls.degreeCelsius.value ?? 0);
  }
}
