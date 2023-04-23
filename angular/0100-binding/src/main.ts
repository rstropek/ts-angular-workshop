import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { FunctionsPipesComponent } from './app/functions-pipes/functions-pipes.component';
import { OnPushComponent } from './app/on-push/on-push.component';
import { enableProdMode } from '@angular/core';
import { ReactiveFormComponent } from './app/reactive/reactive';

// During development, Angular calls functions in data binding twice to ensure that
// the UI remains consistent with the underlying data. This is not done in production.
// If you want to see the difference, uncomment the following line.
// enableProdMode();

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', pathMatch: 'full', redirectTo: 'func-pipes' },
      { path: 'func-pipes', component: FunctionsPipesComponent },
      { path: 'on-push', component: OnPushComponent },
      { path: 'reactive', component: ReactiveFormComponent },
    ]),
  ]
});
