import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { FunctionsPipesComponent } from './app/functions-pipes/functions-pipes.component';
import { OnPushComponent } from './app/on-push/on-push.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', pathMatch: 'full', redirectTo: 'func-pipes' },
      { path: 'func-pipes', component: FunctionsPipesComponent },
      { path: 'on-push', component: OnPushComponent },
    ]),
  ]
});
