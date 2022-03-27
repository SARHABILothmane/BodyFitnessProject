import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { CalculatorScientifiqueComponent } from './calculator-scientifique/calculator-scientifique.component';

export function playerFactory() {
  return import('lottie-web/build/player/lottie_svg');
}

@NgModule({
  declarations: [
    HomeComponent,
    CalculatorScientifiqueComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NbButtonModule,
    NbIconModule,
    NgxJsonLdModule,
    LottieModule.forRoot({ player: playerFactory }),
  ]
})
export class HomeModule { }
