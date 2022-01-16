import { FormBmiModule } from './../../home/form-bmi/form-bmi.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';

import { BodyMassIndexRoutingModule } from './body-mass-index-routing.module';
import { BodyMassIndexComponent } from './body-mass-index.component';
import { NbIconModule, NbFormFieldModule, NbAlertModule, NbTabsetModule, NbCardModule, NbLayoutModule, NbToastrModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoModule } from '../../home/info/info.module';

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web/build/player/lottie_svg');
}
@NgModule({
  declarations: [
    BodyMassIndexComponent,
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
    FormBmiModule,
    InfoModule,
    NbToastrModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory }),
  ]
})
export class BodyMassIndexModule { }
