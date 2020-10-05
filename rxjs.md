# RxJS

Introduction to [RxJS](https://rxjs-dev.firebaseapp.com/)


<!-- .slide: class="left" -->
## Why RxJS?

* For reactive programming using *Observables*
* Compose asynchronous or callback-based code
* Heavily used by Angular


<!-- .slide: class="left" -->
## Manually Creating an Observable

```js
import { Observable } from 'rxjs';

export function manualObservable() {
    var observable = new Observable(subscriber => {
        subscriber.next(1);
        subscriber.next(2);
        setTimeout(() => {
            subscriber.next(3);
            subscriber.complete();
        }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
        next: x => console.log('got value ' + x)
    });
    console.log('just after subscribe');
}
```


<!-- .slide: class="left" -->
## Error Handling

```js
import { Observable } from 'rxjs';

export function errorHandling() {
    var observable = new Observable(subscriber => {
        subscriber.next(1);
        setTimeout(() => {
            subscriber.next(2);
            subscriber.error("ERROR");
        }, 1000);
    });

    observable.subscribe({
        next: x => console.log('got value ' + x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
    });
}
```


<!-- .slide: class="left" -->
## Unsubscribe

```js
import { Observable } from 'rxjs';

export function unsubscribeFromObservable() {
    var observable = new Observable(subscriber => {
        const interval = setInterval(() => subscriber.next(42), 1000);
        return () => clearInterval(interval);
    });

    const subscription = observable.subscribe({
        next: x => console.log('got value ' + x),
        complete: () => console.log('done'),
    });

    setTimeout(() => subscription.unsubscribe(), 5000);
}
```


<!-- .slide: class="left" -->
## Creating Observables

```js
import { from, of, interval, timer } from 'rxjs';

export function creatingObservables() {
    // Read more at http://reactivex.io/documentation/operators.html
    from([1, 2, 3]).subscribe(v => console.log(v));
    of(1, 2, 3).subscribe(v => console.log(v));

    // Note that the following line does not block the program. It
    // executes the observer code asynchronously.
    const subscription = interval(1000).subscribe(v => console.log(v + 1));
    setTimeout(() => subscription.unsubscribe(), 5000);
}
```


<!-- .slide: class="left" -->
## Creating Observables from DOM Events

```js
import { fromEvent } from 'rxjs';

export function domEvents() {
    let counter = 0;
    const button = document.querySelector("button");
    fromEvent(button, "click")
        .subscribe(() => console.log(`Clicked button ${++counter} times...`));
}
```


<!-- .slide: class="left" -->
## Pipelines

```js
import { from, interval, pipe, fromEvent } from 'rxjs';
import { map, filter, take, debounceTime } from 'rxjs/operators';

export function pipelines() {
    // Read more at http://reactivex.io/documentation/operators.html
    from([1, 2, 3]).pipe(map(n => n ** 2)).subscribe(v => console.log(v));
    interval(500).pipe(take(3)).subscribe(v => console.log(v));

    // Combining operators
    interval(500).pipe(map(n => n ** 2), take(3)).subscribe(v => console.log(v));
    const myMap = pipe(map<number, number>(n => n ** 2), take(3));
    interval(500).pipe(myMap).subscribe(v => console.log(v));

    const button = document.querySelector("button");
    fromEvent(button, "click")
        .pipe(debounceTime(250), take(5))
        .subscribe(v => console.log('clicked'));
}
```


<!-- .slide: class="left" -->
## Combining

```js
import { from, concat, interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';

// Combining observables
export function combine() {
    const o1 = from([1, 2]);
    const o2 = from([3, 4]);
    const o3 = concat(o1, o2);
    o3.subscribe(v => console.log(v));

    // Try `concat` and `merge` with async code...
    const asyncO1 = interval(1000).pipe(map(v => v + 1), take(3));
    const asyncO2 = interval(2000).pipe(map(v => (v + 1) * 10), take(3));
    const asyncO3 = concat(asyncO1, asyncO2);
    // const asyncO3 = merge(asyncO1, asyncO2);
    asyncO3.forEach(v => console.log(v));
}
```


<!-- .slide: class="left" -->
## Nested Observables

```js
import { from, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export function flatMapping() {
    const webApiResponse = of(["Foo", "Bar"]);
    const resultArray = webApiResponse.pipe(mergeMap(v => from(v)));
    resultArray.subscribe(v => console.log(v));
}
```


<!-- .slide: class="left" -->
## More Complex Auto-Search Sample

```js
import { Observable, of, merge } from 'rxjs';
import { delay, debounceTime, switchMap, tap, mergeMap } from 'rxjs/operators';

export function autoSearch() {
    const data = ['Tom', 'Tim', 'Timothy', 'John', 'James'];

    // Simulate Angular's get method
    function get(filter: string): Observable<string[]> {
        return new Observable<string[]>(subscriber => {
            let cancelled = false;
            setTimeout(() => {
                if (cancelled) {
                    console.log(`Request for ${filter} cancelled`);
                    return;
                }
                
                subscriber.next(data.filter(n => n.startsWith(filter)));
            }, 1000);

            return () => cancelled = true;
        });
    }

    const typing = merge(
        of('T').pipe(delay(100)), 
        of('To').pipe(delay(150)), 
        of('T').pipe(delay(500)), 
        of('Ti').pipe(delay(650)),
        of('Tim').pipe(delay(2650)),
        of('Timo').pipe(delay(2750)));

    typing.pipe(
        tap(v => console.log(`User entered ${v}`)),
        debounceTime(200),
        tap(v => console.log(`Querying API for ${v}`)),
        switchMap(filter => get(filter)),
        mergeMap(r => r)
    ).subscribe(v => console.log(v));
}
```
