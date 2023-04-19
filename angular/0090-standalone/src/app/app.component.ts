import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingService } from './greeting.service';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <h1>{{ greeting.getGreeting() }}!</h1>
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet]
})
export class AppComponent {
  constructor(public greeting: GreetingService) {}
}
