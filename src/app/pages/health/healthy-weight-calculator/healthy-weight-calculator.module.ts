import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthyWeightCalculatorComponent } from './healthy-weight-calculator.component';

const routes: Routes = [
  { path: "", component: HealthyWeightCalculatorComponent },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HealthyWeightCalculatorModule { }
