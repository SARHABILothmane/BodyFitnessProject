import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbLayoutModule, NbCardModule, NbFormFieldModule, NbSelectModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdealWeightCalculatorComponent } from './ideal-weight-calculator.component';


const routes: Routes = [
  { path: "", component: IdealWeightCalculatorComponent },
];
@NgModule({
  declarations: [
    IdealWeightCalculatorComponent,
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
    FontAwesomeModule,
    RouterModule.forChild(routes),
  ]
})
export class IdealWeightCalculatorModule { }
