// import { BodyMassIndexModule } from './body-mass-index/body-mass-index.module';
// import { BodyFatPorcentageModule } from './body-fat-porcentage/body-fat-porcentage.module';
import { CalcultorComponent } from './calcultor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: CalcultorComponent },
  // { path: "", redirectTo: "/candidat/assignements", pathMatch: "full" },
  // { path: "metre", loadChildren: () => import("src/app/pages/calcultor/metre-to-inch/metre-to-inch.module").then(mod => mod.MetreToInchModule) },
  { path: "date-calculator", loadChildren: () => import("src/app/pages/calcultor/date-calculator/date-calculator.module").then(mod => mod.DateCalculatorModule) },
  { path: "age-calculator", loadChildren: () => import("src/app/pages/calcultor/age-calculator/age-calculator.module").then(mod => mod.AgeCalculatorModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcultorRoutingModule { }
