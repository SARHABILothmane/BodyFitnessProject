import { FooterComponent } from './../../components/footer/footer.component';
import { MenuComponent } from './../../components/menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteLayoutRoutingModule } from './site-layout-routing.module';
import { SiteLayoutComponent } from './site-layout.component';
import {  NbButtonModule, NbIconModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SiteLayoutComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SiteLayoutRoutingModule,
    // NbInputModule,
    NbButtonModule,
    NbIconModule,
    // NbFormFieldModule,
    NbLayoutModule,
    // NbSidebarModule,
    // NbCardModule,
    // FontAwesomeModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule,



  ]
})
export class SiteLayoutModule { }
