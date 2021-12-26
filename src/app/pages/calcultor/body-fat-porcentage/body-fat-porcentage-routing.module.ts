import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyFatPorcentageComponent } from './body-fat-porcentage.component';

const routes: Routes = [
  { path: "", component: BodyFatPorcentageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyFatPorcentageRoutingModule { }
