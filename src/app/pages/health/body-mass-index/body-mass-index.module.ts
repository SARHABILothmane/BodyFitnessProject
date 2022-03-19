import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyMassIndexComponent } from './body-mass-index.component';
import { InfoModule } from '../../home/info/info.module';
import { HeroSectionModule } from '../../home/hero-section/hero-section.module';


const routes: Routes = [
  { path: "", component: BodyMassIndexComponent },
];

@NgModule({
  declarations: [
    BodyMassIndexComponent
  ],
  imports: [
    CommonModule,
    InfoModule,
    HeroSectionModule,
    RouterModule.forChild(routes),
  ]
})
export class BodyMassIndexModule { }
