import { NbLayoutModule, NbCardModule, NbDatepickerModule, NbFormFieldModule, NbSelectModule, NbCalendarModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateCalculatorComponent } from './date-calculator.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: DateCalculatorComponent },
];
@NgModule({
  declarations: [
    DateCalculatorComponent,
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
    NbCalendarModule,
    NbDatepickerModule.forRoot(),
    RouterModule.forChild(routes),

  ]
})
export class DateCalculatorModule { }
