import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AdminLayoutComponent } from './admin/components/AdminLayout/admin-layout/admin-layout.component';
import { NotFoundComponent } from './components/NotFound/not-found/not-found.component';
import { PublicLayoutComponentComponent } from './public/components/public-layout-component/public-layout-component.component';
import { PublicModule } from './public/public.module';

const routes: Routes = [
  {
    path:'public',
    component: PublicLayoutComponentComponent,
    children: [
      {
        path: '',
        loadChildren: ( ) => import('./public/public.module').then(m => PublicModule )
      }
    ]

  },
  {
    path:'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/admin.module').then(m => AdminModule )
      }
    ]

  },
  {
    path: '', 
    redirectTo: '/public',
    pathMatch: "full"

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
