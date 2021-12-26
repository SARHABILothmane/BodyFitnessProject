import { FooterComponent } from './../../components/footer/footer.component';
import { MenuComponent } from './../../components/menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteLayoutRoutingModule } from './site-layout-routing.module';
import { SiteLayoutComponent } from './site-layout.component';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSpinnerModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';


@NgModule({
  declarations: [
    SiteLayoutComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SiteLayoutRoutingModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbFormFieldModule,
    NbLayoutModule,
    NbSidebarModule,
    NbSpinnerModule,
    NbCardModule



  ]
})
export class SiteLayoutModule { }
