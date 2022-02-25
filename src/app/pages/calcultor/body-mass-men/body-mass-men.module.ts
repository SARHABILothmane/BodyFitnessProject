import { FormBmiModule } from '../../home/form-bmi/form-bmi.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';

import { BodyMassMenComponent } from './body-mass-men.component';
import { NbIconModule, NbFormFieldModule, NbAlertModule, NbTabsetModule, NbCardModule, NbLayoutModule, NbToastrModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoModule } from '../../home/info/info.module';
import { RouterModule, Routes } from '@angular/router';

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web/build/player/lottie_svg');
}

const routes: Routes = [
  { path: "", component: BodyMassMenComponent },
];

@NgModule({
  declarations: [
    BodyMassMenComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
    RouterModule.forChild(routes),
  ]
})
export class BodyMassMenModule { }
