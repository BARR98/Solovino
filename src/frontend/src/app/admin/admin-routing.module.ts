import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdopcionesAdminComponent } from './components/adopciones-admin/adopciones-admin.component';
import { CuentasAdminComponent } from './components/cuentas-admin/cuentas-admin.component';
import { OrganizacionAdminComponent } from './components/organizacion-admin/organizacion-admin.component';
import { PostsAdminComponent } from './components/posts-admin/posts-admin.component';
import { VerPostEspecificoComponent } from './components/ver-post-especifico/ver-post-especifico.component';
import { ViewEspecificAcountComponent } from './components/view-especific-acount/view-especific-acount.component';
import { ViewEspecificAdopcionComponent } from './components/view-especific-adopcion/view-especific-adopcion.component';

const routes: Routes = [

  {
    path: 'posts',
    component: PostsAdminComponent
  },
  {
    path: 'view-post/:id',
    component: VerPostEspecificoComponent
  },
  {
    path: 'adopciones',
    component: AdopcionesAdminComponent
  },
  {
    path: 'view-adopcion/:id',
    component: ViewEspecificAdopcionComponent
  },
  {
    path: 'cuentas',
    component: CuentasAdminComponent
  },
  {
    path: 'view-acount/:id',
    component: ViewEspecificAcountComponent
  },
  {
    path: 'organizacion',
    component: OrganizacionAdminComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
