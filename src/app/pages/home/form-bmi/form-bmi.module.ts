import { ReactiveFormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import { NbTabsetModule, NbCardModule, NbAlertModule, NbFormFieldModule, NbInputModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { FormBmiComponent } from './form-bmi.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export function playerFactory() {
  return import('lottie-web/build/player/lottie_svg');
}

@NgModule({
  declarations: [
    FormBmiComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbTabsetModule,
    NbCardModule,
    NbAlertModule,
    NbFormFieldModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    LottieModule.forRoot({ player: playerFactory }),


  ],
  exports: [FormBmiComponent]
})
export class FormBmiModule { }
