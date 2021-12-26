import { NbAlertModule, NbCardModule, NbFormFieldModule, NbLayoutModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetreToInchRoutingModule } from './metre-to-inch-routing.module';
import { MetreToInchComponent } from './metre-to-inch.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MetreToInchRoutingModule,
  ]
})
export class MetreToInchModule { }
