import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcultorRoutingModule } from './calculator-routing.module';
import { CalcultorComponent } from './calculator.component';

@NgModule({
  declarations: [
    CalcultorComponent,
  ],
  imports: [
    CommonModule,
    CalcultorRoutingModule,
  ]
})
export class CalcultorModule { }
