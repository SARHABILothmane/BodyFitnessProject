import { FormBmiModule } from './../../home/form-bmi/form-bmi.module';
import { NbLayoutModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyMassWomenComponent } from './body-mass-women.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: BodyMassWomenComponent },
];

@NgModule({
  declarations: [
    BodyMassWomenComponent,
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    FormBmiModule,
    RouterModule.forChild(routes),
  ]
})
export class BodyMassWomenModule { }
