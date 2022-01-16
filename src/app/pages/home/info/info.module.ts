import { NbAccordionModule, NbTabsetModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';



@NgModule({
  declarations: [
    InfoComponent,
  ],
  imports: [
    CommonModule,
    NbAccordionModule,
    NbTabsetModule,
  ],
  exports: [InfoComponent]
})
export class InfoModule { }
