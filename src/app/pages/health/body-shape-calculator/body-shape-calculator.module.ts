import { ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule, NbCardModule, NbFormFieldModule, NbSelectModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyShapeCalculatorComponent } from './body-shape-calculator.component';
import { Routes, RouterModule } from '@angular/router';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

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
    // NbCardModule,
    // NbButtonModule,
    // NbInputModule,
    // NbFormFieldModule,
    NbSelectModule,
    OtherCalcultorModule,
    NgxJsonLdModule,
    RouterModule.forChild(routes),

  ]
})
export class BodyShapeCalculatorModule { }
