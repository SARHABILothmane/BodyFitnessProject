import { HealthyWeightCalculatorComponent } from './healthy-weight-calculator/healthy-weight-calculator.component';
import { LottieModule } from 'ngx-lottie';
import { IdealWeightCalculatorComponent } from './ideal-weight-calculator/ideal-weight-calculator.component';
import { BodyShapeCalculatorComponent } from './body-shape-calculator/body-shape-calculator.component';
import { BasalMetabolicRateCalculatorComponent } from './basal-metabolic-rate-calculator/basal-metabolic-rate-calculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BodyFatPorcentageComponent } from './body-fat-porcentage/body-fat-porcentage.component';
import { FormBmiModule } from './../home/form-bmi/form-bmi.module';
import { BodyMassMenComponent } from './body-mass-men/body-mass-men.component';
import { BodyMassWomenComponent } from './body-mass-women/body-mass-women.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbFormFieldModule, NbLayoutModule, NbCardModule, NbAlertModule, NbIconModule, NbSelectModule, NbButtonModule, NbTabsetModule, NbInputModule, NbCheckboxModule } from '@nebular/theme';
import { InfoModule } from './../home/info/info.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRoutingModule } from './health-routing.module';
import { HealthComponent } from './health.component';
import { OtherCalcultorModule } from '../other-calcultor/other-calculator.module';

export function playerFactory() {
  return import('lottie-web/build/player/lottie_svg');
}
@NgModule({
  declarations: [
    HealthComponent,
    BodyFatPorcentageComponent,
    BodyMassWomenComponent,
    BodyMassMenComponent,
    BasalMetabolicRateCalculatorComponent,
    BodyShapeCalculatorComponent,
    IdealWeightCalculatorComponent,
    HealthyWeightCalculatorComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HealthRoutingModule,
    NbLayoutModule,
    NbIconModule,
    NbButtonModule,
    NbFormFieldModule,
    NbAlertModule,
    NbTabsetModule,
    NbCardModule,
    NbInputModule,
    NbSelectModule,
    FormBmiModule,
    InfoModule,
    FontAwesomeModule,
    OtherCalcultorModule,
    LottieModule.forRoot({ player: playerFactory }),

  ]
})
export class HealthModule { }
