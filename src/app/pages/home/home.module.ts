import { FormBmiModule } from './form-bmi/form-bmi.module';
import { FormBmiComponent } from './form-bmi/form-bmi.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbSelectModule, NbSpinnerModule, NbToastrModule, NbTabsetModule, NbAccordionModule, NbTooltipModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import { InfoModule } from './info/info.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

export function playerFactory() {
  return import('lottie-web/build/player/lottie_svg');
}

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    // FormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NbButtonModule,
    NbIconModule,

    // NbInputModule,
    NbLayoutModule,
    // NbTooltipModule,
    // NbSpinnerModule,
    NbCheckboxModule,
    NbSelectModule,
    // Register module
    NgxJsonLdModule,
    InfoModule,
    FormBmiModule,
    // NbToastrModule.forRoot(),
    // LottieModule.forRoot({ player: playerFactory, useCache: true }),
    LottieModule.forRoot({ player: playerFactory }),
    // SkeletonModule
  ]
})
export class HomeModule { }
