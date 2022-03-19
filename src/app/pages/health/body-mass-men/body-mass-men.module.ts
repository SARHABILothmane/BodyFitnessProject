import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyMassMenComponent } from './body-mass-men.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: BodyMassMenComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BodyMassMenModule { }
