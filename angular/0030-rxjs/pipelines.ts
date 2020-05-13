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
