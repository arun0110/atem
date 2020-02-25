import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactUsComponent } from 'src/app/layout/contact-us/contact-us.component';
import { HistoryComponent } from './history/history.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { EarningsComponent } from './earnings/earnings.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: 'dashboard', component: HomeComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'analysis', component: AnalysisComponent},
  {path: 'leadership', component: LeadershipComponent},
  {path: 'earnings', component: EarningsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: '/home/dashboard'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
