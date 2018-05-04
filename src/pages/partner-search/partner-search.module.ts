import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartnerSearchPage } from './partner-search';

@NgModule({
  declarations: [
    PartnerSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(PartnerSearchPage),
  ],
})
export class PartnerSearchPageModule {}
