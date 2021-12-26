import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbSelectModule, NbSpinnerModule, NbToastrModule, NbTabsetModule, NbAccordionModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import { FormComponent } from './form/form.component';
import { ResultBmiComponent } from './result-bmi/result-bmi.component';
import { InfoComponent } from './info/info.component';
import { FormBmiComponent } from './form-bmi/form-bmi.component';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web/build/player/lottie_svg');
}

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    FormComponent,
    ResultBmiComponent,
    InfoComponent,
    FormBmiComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    ReactiveFormsModule,
    NbInputModule,
    NbLayoutModule,
    NbAlertModule,
    NbSpinnerModule,
    NbFormFieldModule,
    NbCheckboxModule,
    NbSelectModule,
    NbTabsetModule,
    NbAccordionModule,
    NbToastrModule.forRoot(),
    // LottieModule.forRoot({ player: playerFactory, useCache: true }),
    LottieModule.forRoot({ player: playerFactory }),
    SkeletonModule
  ]
})
export class HomeModule { }
