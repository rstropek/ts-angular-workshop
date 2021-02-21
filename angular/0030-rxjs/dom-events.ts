import { fromEvent } from 'rxjs';

export function domEvents() {
    let counter = 0;
    const button = document.querySelector("button")!;
    fromEvent(button, "click")
        .subscribe(() => console.log(`Clicked button ${++counter} times...`));
}
