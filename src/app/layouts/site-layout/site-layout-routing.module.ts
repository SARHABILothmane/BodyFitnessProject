import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from './site-layout.component';

const routes: Routes = [
  {
    path: "", component: SiteLayoutComponent, children: [
      // { path: "", loadChildren: () => import("./pages/home/home.module").then(mod => mod.HomeModule) },
      { path: "", loadChildren: () => import("src/app/pages/home/home.module").then(mod => mod.HomeModule) },
      { path: "about", loadChildren: () => import("src/app/pages/about/about.module").then(mod => mod.AboutModule) },
      { path: "calcultor", loadChildren: () => import("src/app/pages/calcultor/calcultor.module").then(mod => mod.CalcultorModule) },
      { path: "blog", loadChildren: () => import("src/app/pages/blog/blog.module").then(mod => mod.BlogModule) },
      //   { path: "contact", component: ContactSectionComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteLayoutRoutingModule { }
