import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyShapeCalculatorComponent } from './body-shape-calculator.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: BodyShapeCalculatorComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class BodyShapeCalculatorModule { }
