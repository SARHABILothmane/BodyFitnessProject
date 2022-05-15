import { AdsenseModule } from 'ng2-adsense';
import { FormBmiModule } from './../form-bmi/form-bmi.module';
// import { LottieModule } from 'ngx-lottie';
// import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { HeroSectionComponent } from './hero-section.component';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { HeroSectionRoutingModule } from './hero-section-routing.module';
import { OtherCalcultorModule } from '../../other-calcultor/other-calculator.module';

// export function playerFactory() {
//   return import('lottie-web/build/player/lottie_svg');
// }

@NgModule({
  declarations: [HeroSectionComponent],
  imports: [
    // CommonModule,
    HeroSectionRoutingModule,
    // NbIconModule,
    FormBmiModule,
    // NbButtonModule,
    OtherCalcultorModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-2374538044388820',
      adSlot: 7784325323,
    }),
    // LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [HeroSectionComponent]
})
export class HeroSectionModule { }
