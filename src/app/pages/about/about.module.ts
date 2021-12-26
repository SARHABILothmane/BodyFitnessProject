import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { LottieModule } from 'ngx-lottie';
// import { playerFactory } from '../home/home.module';
// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web/build/player/lottie_svg');
}

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    NbButtonModule,
    NbIconModule,
    // CarouselModule,
    LottieModule.forRoot({ player: playerFactory }),

  ]
})
export class AboutModule { }
