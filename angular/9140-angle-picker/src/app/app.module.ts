import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModules } from './material-modules';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngleSelectorModule } from './angle-selector/angle-selector.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MultiLevelRouterComponent, MultiLevelRouterChildComponent } from './multi-level-router/multi-level-router.component';
import { ChildRoutingModule } from './multi-level-router/child-routing.module';
import { CustomErrorHandler } from './error-handler';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    MultiLevelRouterComponent,
    MultiLevelRouterChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ...MaterialModules,
    AngleSelectorModule,
    ChildRoutingModule
  ],
  providers: [
    //{ provide: ErrorHandler, useClass: CustomErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
