import { BannerModule } from './../../../shared/banner/banner.module';
import { LottieModule } from 'ngx-lottie';
import { OtherCalcultorModule } from './../../other-calcultor/other-calculator.module';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbCardModule, NbFormFieldModule, NbSelectModule, NbButtonModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyFatPorcentageRoutingModule } from './body-fat-porcentage-routing.module';
import { BodyFatPorcentageComponent } from './body-fat-porcentage.component';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { AdsenseModule } from 'ng2-adsense';

// export function playerFactory() {
//   return import('lottie-web/build/player/lottie_svg');
// }
@NgModule({
  declarations: [
    BodyFatPorcentageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // NbCardModule,
    // NbButtonModule,
    // NbInputModule,
    // NbAlertModule,
    // NbFormFieldModule, 
    NbSelectModule,
    OtherCalcultorModule,
    // FontAwesomeModule,
    // RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' }),
    AdsenseModule.forRoot({
      adClient: 'ca-pub-2374538044388820',
      adSlot: 7784325323,
    }),
    BodyFatPorcentageRoutingModule,
    NbLayoutModule,
    NgxJsonLdModule,
    // BannerModule,
    // LottieModule.forRoot({ player: playerFactory }),
  ]
})
export class BodyFatPorcentageModule { }
