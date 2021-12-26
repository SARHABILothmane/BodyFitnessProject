import { BodyMassIndexModule } from './body-mass-index/body-mass-index.module';
import { BodyFatPorcentageModule } from './body-fat-porcentage/body-fat-porcentage.module';
import { CalcultorComponent } from './calcultor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: CalcultorComponent },
  // { path: "", redirectTo: "/candidat/assignements", pathMatch: "full" },
  { path: "metre", loadChildren: () => import("src/app/pages/calcultor/metre-to-inch/metre-to-inch.module").then(mod => mod.MetreToInchModule) },
  { path: "body-fat-porcentage", loadChildren: () => import("src/app/pages/calcultor/body-fat-porcentage/body-fat-porcentage.module").then(mod => mod.BodyFatPorcentageModule) },
  { path: "body-mass-index", loadChildren: () => import("src/app/pages/calcultor/body-mass-index/body-mass-index.module").then(mod => mod.BodyMassIndexModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcultorRoutingModule { }
