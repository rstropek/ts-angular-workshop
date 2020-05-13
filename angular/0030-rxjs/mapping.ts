import { from, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

export function flatMapping() {
    const webApiResponse = of(["Foo", "Bar"]);
    const resultArray = webApiResponse.pipe(flatMap(v => from(v)));
    resultArray.subscribe(v => console.log(v));
}
