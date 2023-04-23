import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Bike, BrakeType, FrameMaterial, sampleBikes } from './model';
import { CommonModule } from '@angular/common';
import { windowWithCounters } from '../binding-counters';

@Component({
  standalone: true,
  selector: 'app-bike-display',
  imports: [CommonModule],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngIf="bike">
      <h2>Bike Details</h2>
      <p>
        Wheels: {{ bike.wheels[0].manufacturer }} (Front) & {{ bike.wheels[1].manufacturer }} (Rear)<br />
        Frame Material: {{ frameMaterial[bike.frameMaterial] }}<br />
        Weight: {{ bike.weight }} kg<br />
        Suspension: {{ bike.hasSuspension[0] ? 'Front' : '' }} {{ bike.hasSuspension[1] ? 'Rear' : '' }} {{ !bike.hasSuspension[0] && !bike.hasSuspension[1] ? 'None' : '' }}<br />
        Brake Type: {{ brakeType[bike.brakeType] }}<br />
        Groupset: {{ bike.groupset.manufacturer }}<br />
        Production Price: {{ bike.productionPrice }}<br />
        Retail Price: {{ retailPrice }}<br />
      </p>
    </div>
  `,
})
export class BikeDisplayComponent {
  @Input() bike?: Bike;

  frameMaterial = FrameMaterial;
  brakeType = BrakeType;

  constructor() {
    windowWithCounters.numberOfFunctionCalls = '0';
  }

  get retailPrice() {
    windowWithCounters.numberOfFunctionCalls = (
      parseInt(windowWithCounters.numberOfFunctionCalls) + 1
    ).toString();
    return this.bike?.retailPrice;
  }
}

@Component({
  standalone: true,
  imports: [BikeDisplayComponent],
  selector: 'app-root',
  template: `
    <h1>My Bike!</h1>

    <p>Current Date Time: {{ currentDateTime }}</p>

    <app-bike-display [bike]="bike"></app-bike-display>
    <button (click)="increasePrice()">Price increase</button>
    <button (click)="increasePriceObject()">Price increase (object)</button>
  `,
})
export class OnPushComponent implements OnInit, OnDestroy {
  bike: Bike = sampleBikes[0];
  interval!: ReturnType<typeof setInterval>;
  currentDateTime = new Date();

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  increasePrice() {
    this.bike.retailPrice += 100;
  }

  increasePriceObject() {
    this.bike = { ...this.bike, retailPrice: this.bike.retailPrice + 100 };
  }
}
