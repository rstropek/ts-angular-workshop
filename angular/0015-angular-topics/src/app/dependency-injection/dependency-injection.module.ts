import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyInjectionDemoComponent } from './dependency-injection-demo/dependency-injection-demo.component';
import { LoggerService } from './logger.service';
import { MailBuilderService, PRIORITY } from './mail-builder.service';
import { Routes, RouterModule } from '@angular/router';

const moduleRoutes: Routes = [
  { path: 'dependency-injection', component: DependencyInjectionDemoComponent }
];

@NgModule({
  declarations: [
    DependencyInjectionDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(moduleRoutes)
  ],
  providers: [
    LoggerService
  ]
})
export class DependencyInjectionModule { }
