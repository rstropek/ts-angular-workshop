import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MonoTypeOperatorFunction, Observable, Subject, debounceTime, map, startWith } from "rxjs";
import { mergeWith, switchMap } from "rxjs/operators";

class FibonacciGenerator {
  generateFibonacci(limit: number): number[] {
    if (limit < 1) {
      return [];
    }

    const fibonacciNumbers: number[] = [0, 1];

    while (true) {
      const nextNumber =
        fibonacciNumbers[fibonacciNumbers.length - 1] +
        fibonacciNumbers[fibonacciNumbers.length - 2];
      if (nextNumber > limit) {
        break;
      }
      fibonacciNumbers.push(nextNumber);
    }

    console.log(`I calculated ${fibonacciNumbers.length} numbers.`);
    return fibonacciNumbers;
  }

  generateFibonacciAsync(limit: number): Promise<number[]> {
    // Simulate an async operation.
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = this.generateFibonacci(limit);
        resolve(result);
      }, 10);
    });
  }
}

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [FibonacciGenerator],
  template: `
    <form [formGroup]="form">
      <input type="number" formControlName="limit" />
      <button type="button" (click)="update()">Generate</button>
    </form>
    <ul>
      <li *ngFor="let number of fibonacciNumbers">
        {{ number }}
      </li>
    </ul>
    <ul>
      <li *ngFor="let number of fibonacciNumbers$ | async">
        {{ number }}
      </li>
    </ul>
  `
})
export class ReactiveFormComponent {
  form = new FormGroup({
    limit: new FormControl(10, { nonNullable: true })
  });

  fibonacciNumbers: number[] = [];
  updateButtonClick$ = new Subject<void>();
  fibonacciNumbers$!: Observable<number[]>;

  constructor(private fibonacciGenerator: FibonacciGenerator) {}

  ngOnInit() {
    // const mergeStartDebounce: MonoTypeOperatorFunction<number> = pipe(
    //   mergeWith(this.updateButtonClick$.pipe(map(_ => this.form.controls.limit.value))),
    //   startWith(this.form.controls.limit.value),
    //   debounceTime(500)
    // );

    this.form.valueChanges
      .pipe(
        map(value => value.limit ?? 0),
        mergeWith(this.updateButtonClick$.pipe(map(_ => this.form.controls.limit.value))),
        startWith(this.form.controls.limit.value),
        debounceTime(500)
        //mergeStartDebounce
      )
      .subscribe(value => {
        this.fibonacciNumbers = this.fibonacciGenerator.generateFibonacci(
          value
        );
      });

    this.fibonacciNumbers$ = this.form.valueChanges
      .pipe(
        map(value => value.limit ?? 0),
        mergeWith(this.updateButtonClick$.pipe(map(_ => this.form.controls.limit.value))),
        startWith(this.form.controls.limit.value),
        debounceTime(500),
        //mergeStartDebounce,
        switchMap(limit => this.fibonacciGenerator.generateFibonacciAsync(limit))
      );
    }

  update() {
    this.updateButtonClick$.next();
  }
}
