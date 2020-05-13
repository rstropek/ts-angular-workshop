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
