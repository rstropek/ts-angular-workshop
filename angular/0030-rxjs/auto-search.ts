import { Observable, of, merge } from 'rxjs';
import { delay, debounceTime, switchMap, flatMap, tap } from 'rxjs/operators';

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
        flatMap(r => r)
    ).subscribe(v => console.log(v));
}
