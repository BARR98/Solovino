import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicLayoutComponentComponent } from './components/public-layout-component/public-layout-component.component';
import { HomePublicComponentComponent } from './components/home-public-component/home-public-component.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { PublicSharedModule } from './public-shared/public-shared.module';
import { AdopcionComponent } from './components/adopcion/adopcion.component';
import { SobreNostrosComponent } from './components/sobre-nostros/sobre-nostros.component';
import { PublicDonacionesComponent } from './components/public-donaciones/public-donaciones.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    PublicLayoutComponentComponent,
    HomePublicComponentComponent,
    AdopcionComponent,
    SobreNostrosComponent,
    PublicDonacionesComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule,
    MaterialModule,
    PublicSharedModule
  ]
})
export class PublicModule { }
