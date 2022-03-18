import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AdminSidenavComponent } from './components/admin-sidenav/admin-sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminNavigationComponent,
    AdminSidenavComponent
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    AdminSidenavComponent
  ]
})
export class SharedModule { }
