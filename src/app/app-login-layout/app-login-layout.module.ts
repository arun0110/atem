import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoginLayoutRoutingModule } from './app-login-layout-routing.module';
import { AppLoginLayoutComponent } from './app-login-layout.component';


@NgModule({
  declarations: [AppLoginLayoutComponent],
  imports: [
    CommonModule,
    AppLoginLayoutRoutingModule
  ]
})
export class AppLoginLayoutModule { }