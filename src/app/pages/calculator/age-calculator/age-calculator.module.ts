import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgeCalculatorComponent } from './age-calculator.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", component: AgeCalculatorComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AgeCalculatorModule { }
