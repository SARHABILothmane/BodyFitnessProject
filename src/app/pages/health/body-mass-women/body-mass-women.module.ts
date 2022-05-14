import { FormBmiModule } from './../../home/form-bmi/form-bmi.module';
import { NbLayoutModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { BodyMassWomenComponent } from './body-mass-women.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';

const routes: Routes = [
  { path: "", component: BodyMassWomenComponent },
];

@NgModule({
  declarations: [
    BodyMassWomenComponent,
  ],
  imports: [
    NbLayoutModule,
    FormBmiModule,
    NgxJsonLdModule,
    OtherCalcultorModule,
    RouterModule.forChild(routes),
  ]
})
export class BodyMassWomenModule { }
