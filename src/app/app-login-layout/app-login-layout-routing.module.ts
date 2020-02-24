import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginLayoutComponent } from './app-login-layout.component';


const routes: Routes = [
  {path: '', component: AppLoginLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLoginLayoutRoutingModule { }
