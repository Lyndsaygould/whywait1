import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagePartnerPage } from './manage-partner';

@NgModule({
  declarations: [
    ManagePartnerPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagePartnerPage),
  ],
})
export class ManagePartnerPageModule {}
