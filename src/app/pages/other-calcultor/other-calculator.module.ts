
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OtherCalcultorHealthComponent } from './other-calculator-health/other-calculator-health.component';
import { NbIconModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OtherCalcultorHealthComponent],
  imports: [
    CommonModule,
    NbIconModule,
    RouterModule
  ],
  exports:[OtherCalcultorHealthComponent]
})
export class OtherCalcultorModule { }
