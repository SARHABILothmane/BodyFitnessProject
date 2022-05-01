
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {OtherCalcultorHealthComponent } from './other-calculator-health/other-calculator-health.component';
// import { NbIconModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { OtherCalcultorTimeComponent } from './other-calculator-time/other-calculator-time.component';

@NgModule({
  declarations: [OtherCalcultorHealthComponent, OtherCalcultorTimeComponent],
  imports: [
    // CommonModule,
    // NbIconModule,
    RouterModule
  ],
  exports:[OtherCalcultorHealthComponent,OtherCalcultorTimeComponent]
})
export class OtherCalcultorModule { }
