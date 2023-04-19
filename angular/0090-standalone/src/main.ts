import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { GreetingService } from './app/greeting.service';
import { TemperatureComponent } from './app/temperature.component';

// Note that we are bootstrapping an application without modules.
bootstrapApplication(AppComponent, {
  providers: [
    { provide: GreetingService },
    provideRouter([
      { path: '', pathMatch: 'full', redirectTo: '/temperature' },
      { path: 'temperature', component: TemperatureComponent }
    ]),
  ]
});
