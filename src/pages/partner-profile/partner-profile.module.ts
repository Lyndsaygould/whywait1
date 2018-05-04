import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartnerProfilePage } from './partner-profile';

@NgModule({
  declarations: [
    PartnerProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(PartnerProfilePage),
  ],
})
export class PartnerProfilePageModule {}
