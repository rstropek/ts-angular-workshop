import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeComponent } from './home/home.component';
import { InputOutputComponent, InOutUserComponent } from './input-output/input-output.component';
import { TemplateDemoComponent } from './template-demo/template-demo.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { BasicsHomeComponent } from './basics-home/basics-home.component';
import { UpperLowercasePipe, CustomPipeDemoComponent } from './pipe/upper-lowercase.pipe';
import { Styled1Component, Styled2Component, StyledComponent } from './view-encapsulation/view-encapsulation.component';

const moduleRoutes: Routes = [
  {
    path: 'basics',
    component: BasicsHomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'hello-world' },
      { path: 'hello-world', component: HelloWorldComponent },
      { path: 'home', component: HomeComponent },
      { path: 'input-output', component: InOutUserComponent },
      { path: 'template-demo', component: TemplateDemoComponent },
      { path: 'pipe', component: CustomPipeDemoComponent },
      { path: 'view-encapsulation', component: StyledComponent },
    ]
  }
];

@NgModule({
  declarations: [
    HelloWorldComponent,
    HomeComponent,
    InputOutputComponent,
    InOutUserComponent,
    TemplateDemoComponent,
    BasicsHomeComponent,
    UpperLowercasePipe,
    CustomPipeDemoComponent,
    Styled1Component,
    Styled2Component,
    StyledComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(moduleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BasicsModule { }
