import { ReactiveFormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import { NbLayoutModule, NbInputModule, NbButtonModule, NbToastrModule, NbAlertModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
// import { playerFactory } from '../home/home.module';
// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web/build/player/lottie_svg');
}

const routes: Routes = [
  { path: '', component: ContactComponent }
];


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbInputModule,
    NbButtonModule,
    NbAlertModule,
    NbToastrModule.forRoot(),
    RouterModule.forChild(routes),
    LottieModule.forRoot({ player: playerFactory }),


  ]
})
export class ContactModule { }
