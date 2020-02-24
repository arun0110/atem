import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactUsComponent } from 'src/app/layout/contact-us/contact-us.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'test', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
