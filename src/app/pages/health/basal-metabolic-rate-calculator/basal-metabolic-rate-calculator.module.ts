import { ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule, NbCardModule, NbFormFieldModule, NbSelectModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasalMetabolicRateCalculatorRoutingModule } from './basal-metabolic-rate-calculator-routing.module';
import { BasalMetabolicRateCalculatorComponent } from './basal-metabolic-rate-calculator.component';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

const routes: Routes = [
  { path: "", component: BasalMetabolicRateCalculatorComponent },
];
@NgModule({
  declarations: [
    BasalMetabolicRateCalculatorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbFormFieldModule,
    NbSelectModule,
    BasalMetabolicRateCalculatorRoutingModule,
    OtherCalcultorModule,
    NgxJsonLdModule,
    RouterModule.forChild(routes),
  ]
})
export class BasalMetabolicRateCalculatorModule { }
