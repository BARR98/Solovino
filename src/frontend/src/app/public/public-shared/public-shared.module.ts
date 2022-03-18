import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicNavigationComponent } from './components/public-navigation/public-navigation.component';
import { MaterialModule } from 'src/app/material/material.module';
import { Router, RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    PublicNavigationComponent
   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    PublicNavigationComponent
  ]
})
export class PublicSharedModule { }
