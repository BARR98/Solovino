import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './components/AdminLayout/admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { PostsAdminComponent } from './components/posts-admin/posts-admin.component';
import { AdopcionesAdminComponent } from './components/adopciones-admin/adopciones-admin.component';
import { CuentasAdminComponent } from './components/cuentas-admin/cuentas-admin.component';
import { OrganizacionAdminComponent } from './components/organizacion-admin/organizacion-admin.component';
import { MaterialModule } from '../material/material.module';
import { VerPostEspecificoComponent } from './components/ver-post-especifico/ver-post-especifico.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ViewEspecificAdopcionComponent } from './components/view-especific-adopcion/view-especific-adopcion.component';
import { ViewEspecificAcountComponent } from './components/view-especific-acount/view-especific-acount.component';
import { ViewEspecificInfoComponent } from './components/view-especific-info/view-especific-info.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    PostsAdminComponent,
    AdopcionesAdminComponent,
    CuentasAdminComponent,
    OrganizacionAdminComponent,
    VerPostEspecificoComponent,
    ViewEspecificAdopcionComponent,
    ViewEspecificAcountComponent,
    ViewEspecificInfoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
