import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbInputModule, NbLayoutModule, NbTabsetModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';

import { CalcultorRoutingModule } from './calcultor-routing.module';
import { CalcultorComponent } from './calcultor.component';
import { MetreToInchComponent } from './metre-to-inch/metre-to-inch.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BodyFatPorcentageComponent } from './body-fat-porcentage/body-fat-porcentage.component';

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web/build/player/lottie_svg');
}
@NgModule({
  declarations: [
    CalcultorComponent,
    BodyFatPorcentageComponent,
    MetreToInchComponent,
  ],
  imports: [
    CommonModule,
    CalcultorRoutingModule,
    ReactiveFormsModule,
    NbFormFieldModule,
    NbLayoutModule,
    NbCardModule,
    NbTabsetModule,
    NbCheckboxModule,
    NbAlertModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    LottieModule.forRoot({ player: playerFactory }),

  ]
})
export class CalcultorModule { }
