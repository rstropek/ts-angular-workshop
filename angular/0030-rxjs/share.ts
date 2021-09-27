import { from, of, interval, timer } from 'rxjs';
import { mapTo, share, shareReplay, tap } from 'rxjs/operators';

export function shareObservable() {
    const source = timer(1000);
    const api = source.pipe(
        tap(() => console.log('Accessing web API')),
        mapTo({ answer: 42 })
    );

    // API will be accessed twice
    const firstSubscriber = api.subscribe(r => console.log(r.answer));
    const secondSubscriber = api.subscribe(r => console.log(r.answer));

    // Low let's share. Try share and shareReplay.
    const shared = api.pipe(share());
    const firstShared = shared.subscribe(r => console.log(r.answer));
    const secondShared = shared.subscribe(r => console.log(r.answer));

    timer(1500).forEach(() => {
        const thirdShared = shared.subscribe(r => console.log(r.answer));
    });

}