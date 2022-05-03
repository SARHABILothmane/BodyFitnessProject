import { NbLayoutModule, NbCardModule, NbDatepickerModule, NbFormFieldModule, NbSelectModule, NbCalendarModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateCalculatorComponent } from './date-calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';

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
    // NbButtonModule,
    // NbInputModule,
    NbFormFieldModule,
    NbSelectModule,
    NbCalendarModule,
    NbDatepickerModule.forRoot(),
    OtherCalcultorModule,
    RouterModule.forChild(routes),

  ]
})
export class DateCalculatorModule { }
