import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import { DateCalculatorComponent } from './date-calculator/date-calculator.component';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbInputModule, NbLayoutModule, NbTabsetModule, NbSelectModule, NbToastrModule, NbIconModule, NbDatepickerModule, NbAccordionModule, NbCalendarModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';

import { CalcultorRoutingModule } from './calcultor-routing.module';
import { CalcultorComponent } from './calcultor.component';
import { MetreToInchComponent } from './metre-to-inch/metre-to-inch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BodyFatPorcentageComponent } from './health/body-fat-porcentage/body-fat-porcentage.component';


export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web/build/player/lottie_svg');
}
@NgModule({
  declarations: [
    CalcultorComponent,
    // BodyFatPorcentageComponent,
    MetreToInchComponent,
    DateCalculatorComponent,
    AgeCalculatorComponent,
  ],
  imports: [
    CommonModule,
    CalcultorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NbFormFieldModule,
    NbLayoutModule,
    NbCardModule,
    NbTabsetModule,
    NbSelectModule,
    NbCheckboxModule,
    // NbAlertModule,
    NbCardModule,
    NbCalendarModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbIconModule,
    NbDatepickerModule.forRoot(),
    // FontAwesomeModule,
    // NbToastrModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory }),

  ]
})
export class CalcultorModule { }
