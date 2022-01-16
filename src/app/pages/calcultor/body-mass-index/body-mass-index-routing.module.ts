import { BodyMassIndexComponent } from './body-mass-index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "men", component: BodyMassIndexComponent },
  { path: "women", component: BodyMassIndexComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyMassIndexRoutingModule { }
