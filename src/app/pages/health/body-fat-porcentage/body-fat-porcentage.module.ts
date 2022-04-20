import { LottieModule } from 'ngx-lottie';
import { OtherCalcultorModule } from './../../other-calcultor/other-calculator.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbCardModule, NbAlertModule, NbFormFieldModule, NbSelectModule, NbButtonModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyFatPorcentageRoutingModule } from './body-fat-porcentage-routing.module';
import { BodyFatPorcentageComponent } from './body-fat-porcentage.component';

export function playerFactory() {
  return import('lottie-web/build/player/lottie_svg');
}
@NgModule({
  declarations: [
    BodyFatPorcentageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbAlertModule,
    NbFormFieldModule,
    NbSelectModule,
    OtherCalcultorModule,
    FontAwesomeModule,
    BodyFatPorcentageRoutingModule,
    NbLayoutModule,
    LottieModule.forRoot({ player: playerFactory }),
  ]
})
export class BodyFatPorcentageModule { }
