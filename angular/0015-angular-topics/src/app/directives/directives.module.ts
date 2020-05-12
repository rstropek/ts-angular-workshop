import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForComponent } from './ngfor/ngfor.component';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesHomeComponent } from './directives-home/directives-home.component';
import { FormsModule } from '@angular/forms';
import { NgIfComponent } from './ng-if/ng-if.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { TooltipSampleComponent } from './tooltip/tooltip-sample.component';
import { OverlayService } from './tooltip/overlay.service';

const moduleRoutes: Routes = [
  {
    path: 'directives',
    component: DirectivesHomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'ng-for' },
      { path: 'ng-for', component: NgForComponent },
      { path: 'ng-if', component: NgIfComponent },
      { path: 'tooltip', component: TooltipSampleComponent }
    ]
  }
];

@NgModule({
  declarations: [
    NgForComponent,
    DirectivesHomeComponent,
    NgIfComponent,
    TooltipDirective,
    TooltipSampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(moduleRoutes)
  ],
  providers: [
    OverlayService
  ]
})
export class DirectivesModule { }
