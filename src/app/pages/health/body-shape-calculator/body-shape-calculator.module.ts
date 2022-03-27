import { ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule, NbCardModule, NbFormFieldModule, NbSelectModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyShapeCalculatorComponent } from './body-shape-calculator.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: BodyShapeCalculatorComponent },
];
@NgModule({
  declarations: [
    BodyShapeCalculatorComponent,
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
    RouterModule.forChild(routes),

  ]
})
export class BodyShapeCalculatorModule { }
