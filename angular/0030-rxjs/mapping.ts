import { from, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export function flatMapping() {
    const webApiResponse = of(["Foo", "Bar"]);
    const resultArray = webApiResponse.pipe(mergeMap(v => from(v)));
    resultArray.subscribe(v => console.log(v));
}
