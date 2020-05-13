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
