import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasalMetabolicRateCalculatorComponent } from './basal-metabolic-rate-calculator.component';

const routes: Routes = [
  { path: "", component: BasalMetabolicRateCalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasalMetabolicRateCalculatorRoutingModule { }
