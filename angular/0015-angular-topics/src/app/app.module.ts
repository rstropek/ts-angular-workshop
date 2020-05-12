import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsModule } from './basics/basics.module';
import { DirectivesModule } from './directives/directives.module';
import { DependencyInjectionModule } from './dependency-injection/dependency-injection.module';
import { FormsDemoModule } from './forms-demo/forms-demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BasicsModule,
    DirectivesModule,
    AppRoutingModule,
    DependencyInjectionModule,
    FormsDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
