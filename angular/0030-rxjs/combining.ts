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
