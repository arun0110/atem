import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HistoryComponent } from './history/history.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { ProfileComponent } from './profile/profile.component';
import { EarningsComponent } from './earnings/earnings.component';
import { AlertModule, PaginationModule, TabsModule  } from 'ngx-bootstrap';

@NgModule({
  declarations: [HomeComponent, HistoryComponent, AnalysisComponent, LeadershipComponent, ProfileComponent, EarningsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot()
  ]
})
export class HomeModule { }
