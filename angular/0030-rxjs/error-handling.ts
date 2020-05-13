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
