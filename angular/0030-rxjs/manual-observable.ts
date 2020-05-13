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
