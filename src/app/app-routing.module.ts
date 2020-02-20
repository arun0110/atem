import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { LandingComponent } from './layout/landing/landing.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { LoginComponent } from './enrollment/login/login.component';
import { SigninComponent } from './enrollment/signin/signin.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
