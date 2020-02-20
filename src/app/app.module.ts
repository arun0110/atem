import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LandingComponent } from './layout/landing/landing.component';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { LoginComponent } from './enrollment/login/login.component';
import { SigninComponent } from './enrollment/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
