import { FormBmiModule } from './../../home/form-bmi/form-bmi.module';
import { NbLayoutModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyMassMenComponent } from './body-mass-men.component';
import { RouterModule, Routes } from '@angular/router';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';

const routes: Routes = [
  { path: "", component: BodyMassMenComponent },
];

@NgModule({
  declarations: [
    BodyMassMenComponent,
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    FormBmiModule,
    RouterModule.forChild(routes),
    OtherCalcultorModule
  ]
})
export class BodyMassMenModule { }
