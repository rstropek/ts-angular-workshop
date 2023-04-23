import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { windowWithCounters } from '../binding-counters';

@Pipe({
  standalone: true,
  name: 'inchToMeter'
})
export class InchToMeterPipe implements PipeTransform {
  numberOfPipeCalls = 0;
  transform(value: number, ...args: any[]): any {
    windowWithCounters.numberOfPipeCalls = (++this.numberOfPipeCalls).toString();
    return value * 0.0254;
  }
}

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, InchToMeterPipe],
  templateUrl: './functions-pipes.component.html',
  styleUrls: ['./functions-pipes.component.css']
})
export class FunctionsPipesComponent {
  x: number = 0;
  y: number = 0;
  formGroup = new FormGroup({
    distanceInch: new FormControl(10),
  });
  numberOfFunctionCalls = 0;

  constructor() { }

  onMouseMove(event: MouseEvent): void {
    this.x = event.offsetX;
    this.y = event.offsetY;
  }

  getDistanceMeters() {
    windowWithCounters.numberOfFunctionCalls = (++this.numberOfFunctionCalls).toString();
    return (this.formGroup.controls.distanceInch.value ?? 0) * 0.0254;
  }
}
