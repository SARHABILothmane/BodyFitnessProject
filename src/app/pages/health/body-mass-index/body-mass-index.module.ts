import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BodyMassIndexComponent } from './body-mass-index.component';
import { InfoModule } from '../../home/info/info.module';
import { HeroSectionModule } from '../../home/hero-section/hero-section.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';


const routes: Routes = [
  { path: "", component: BodyMassIndexComponent },
];

@NgModule({
  declarations: [
    BodyMassIndexComponent
  ],
  imports: [
    InfoModule,
    HeroSectionModule,
    NgxJsonLdModule,
    RouterModule.forChild(routes),
  ]
})
export class BodyMassIndexModule { }
