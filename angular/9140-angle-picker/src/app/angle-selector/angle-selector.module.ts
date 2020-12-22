import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngleSelectorStaticComponent } from './angle-selector-static/angle-selector-static.component';
import { AngleSelectorBasicComponent, AngleSelectorBasicHostComponent } from './angle-selector-basic/angle-selector-basic.component';
import {
  AngleSelectorPointerComponent,
  AngleSelectorPointerHostComponent
} from './angle-selector-pointer/angle-selector-pointer.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngleSelectorPopperComponent } from './angle-selector-popper/angle-selector-popper.component';
import { NgxPopperModule } from 'ngx-popper';
import { SpeedupAngleChangerDirective, SpeedupAngleChangerHostDirective } from './speedup-angle-changer.directive';

@NgModule({
  declarations: [
    AngleSelectorStaticComponent,
    AngleSelectorBasicComponent,
    AngleSelectorBasicHostComponent,
    AngleSelectorPointerComponent,
    AngleSelectorPointerHostComponent,
    AngleSelectorPopperComponent,
    SpeedupAngleChangerDirective,
    SpeedupAngleChangerHostDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    NgxPopperModule.forRoot({})
  ],
  exports: [
    AngleSelectorStaticComponent,
    AngleSelectorBasicComponent,
    AngleSelectorBasicHostComponent,
    AngleSelectorPointerComponent,
    AngleSelectorPointerHostComponent,
    AngleSelectorPopperComponent,
    SpeedupAngleChangerDirective,
    SpeedupAngleChangerHostDirective
  ]
})
export class AngleSelectorModule { }
