import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetreToInchComponent } from './metre-to-inch.component';

const routes: Routes = [
  { path: "", component: MetreToInchComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetreToInchRoutingModule { }
