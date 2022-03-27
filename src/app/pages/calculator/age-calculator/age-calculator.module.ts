import { ReactiveFormsModule } from '@angular/forms';
import { OtherCalcultorModule } from './../../other-calcultor/other-calculator.module';
import { NbLayoutModule, NbCardModule, NbDatepickerModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgeCalculatorComponent } from './age-calculator.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", component: AgeCalculatorComponent },
];
@NgModule({
  declarations: [
    AgeCalculatorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbDatepickerModule.forRoot(),
    OtherCalcultorModule,
    RouterModule.forChild(routes)
  ]
})
export class AgeCalculatorModule { }
