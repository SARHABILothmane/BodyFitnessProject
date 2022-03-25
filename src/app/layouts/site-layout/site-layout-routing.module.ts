import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from './site-layout.component';

const routes: Routes = [
  {
    path: "", component: SiteLayoutComponent, children: [
      // { path: "", loadChildren: () => import("./pages/home/home.module").then(mod => mod.HomeModule) },
      { path: "", loadChildren: () => import("src/app/pages/home/home.module").then(mod => mod.HomeModule) },
      // { path: "about", loadChildren: () => import("src/app/pages/about/about.module").then(mod => mod.AboutModule) },
      { path: "calculator", loadChildren: () => import("src/app/pages/calculator/calculator.module").then(mod => mod.CalcultorModule) },
      { path: "health", loadChildren: () => import("src/app/pages/health/health.module").then(mod => mod.HealthModule) },
      // { path: "bmi-calculator-women", loadChildren: () => import("src/app/pages/calcultor/health/body-mass-women/body-mass-women.module").then(mod => mod.BodyMassWomenModule) },
      // { path: "bmi-calculator-men", loadChildren: () => import("src/app/pages/calcultor/health/body-mass-men/body-mass-men.module").then(mod => mod.BodyMassMenModule) },
      // { path: "body-fat-porcentage", loadChildren: () => import("src/app/pages/calcultor/health/body-fat-porcentage/body-fat-porcentage.module").then(mod => mod.BodyFatPorcentageModule) },
      // { path: "blog", loadChildren: () => import("src/app/pages/blog/blog.module").then(mod => mod.BlogModule) },
      { path: "", loadChildren: () => import("src/app/pages/terms-private/terms-private.module").then(mod => mod.TermsPrivateModule) },
      //   { path: "contact", component: ContactSectionComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteLayoutRoutingModule { }
