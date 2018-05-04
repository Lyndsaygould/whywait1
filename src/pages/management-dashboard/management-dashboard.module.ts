import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagementDashboardPage } from './management-dashboard';

@NgModule({
  declarations: [
    ManagementDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagementDashboardPage),
  ],
})
export class ManagementDashboardPageModule {}
