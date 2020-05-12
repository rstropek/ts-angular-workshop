import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent, RevenueValidatorDirective } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsDemoHomeComponent } from './forms-demo-home/forms-demo-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const moduleRoutes: Routes = [
  {
    path: 'forms',
    component: FormsDemoHomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'template-driven' },
      { path: 'template-driven', component: TemplateDrivenFormComponent },
      { path: 'reactive', component: ReactiveFormComponent }
    ]
  }
];

@NgModule({
  declarations: [
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    FormsDemoHomeComponent,
    RevenueValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(moduleRoutes)
  ],
  providers: []
})
export class FormsDemoModule { }
