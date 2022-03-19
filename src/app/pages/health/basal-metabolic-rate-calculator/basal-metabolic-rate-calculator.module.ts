import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasalMetabolicRateCalculatorRoutingModule } from './basal-metabolic-rate-calculator-routing.module';
import { BasalMetabolicRateCalculatorComponent } from './basal-metabolic-rate-calculator.component';

const routes: Routes = [
  { path: "", component: BasalMetabolicRateCalculatorComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasalMetabolicRateCalculatorRoutingModule,
    RouterModule.forChild(routes),
  ]
})
export class BasalMetabolicRateCalculatorModule { }
