import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdealWeightCalculatorComponent } from './ideal-weight-calculator.component';


const routes: Routes = [
  { path: "", component: IdealWeightCalculatorComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class IdealWeightCalculatorModule { }
