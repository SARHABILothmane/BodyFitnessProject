import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyMassWomenComponent } from './body-mass-women.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: BodyMassWomenComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BodyMassWomenModule { }
