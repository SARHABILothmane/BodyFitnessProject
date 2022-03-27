import { NbLayoutModule, NbCardModule, NbSelectModule, NbFormFieldModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeCalculatorComponent } from './time-calculator.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: TimeCalculatorComponent },
];

@NgModule({
  declarations: [
    TimeCalculatorComponent,
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
export class TimeCalculatorModule { }
