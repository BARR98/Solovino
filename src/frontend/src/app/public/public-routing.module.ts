import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdopcionComponent } from './components/adopcion/adopcion.component';
import { HomePublicComponentComponent } from './components/home-public-component/home-public-component.component';
import { LoginComponent } from './components/login/login.component';
import { PublicDonacionesComponent } from './components/public-donaciones/public-donaciones.component';
import { SobreNostrosComponent } from './components/sobre-nostros/sobre-nostros.component';

const routes: Routes = [
  {
    path:'home',
    component: HomePublicComponentComponent

  }, 
  {
    path:'adopcion',
    component: AdopcionComponent

  }, 
  {
    path:'sobre-nostros',
    component: SobreNostrosComponent

  },   
  {
    path:'donaciones',
    component: PublicDonacionesComponent

  },   
  {
    path:'login',
    component: LoginComponent

  }, 
  {
    path:'',
    component: HomePublicComponentComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
