import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateCalculatorComponent } from './date-calculator.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: DateCalculatorComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class DateCalculatorModule { }
