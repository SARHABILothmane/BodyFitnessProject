import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';

import { BodyMassIndexRoutingModule } from './body-mass-index-routing.module';
import { BodyMassIndexComponent } from './body-mass-index.component';
import { BmiFormComponent } from './bmi-form/bmi-form.component';
import { NbIconModule, NbFormFieldModule, NbAlertModule, NbTabsetModule, NbCardModule, NbLayoutModule, NbToastrModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web/build/player/lottie_svg');
}
@NgModule({
  declarations: [
    BodyMassIndexComponent,
    BmiFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BodyMassIndexRoutingModule,
    NbIconModule,
    NbButtonModule,
    NbFormFieldModule,
    NbAlertModule,
    NbTabsetModule,
    NbCardModule,
    NbInputModule,
    NbLayoutModule,
    NbToastrModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory }),
  ]
})
export class BodyMassIndexModule { }
