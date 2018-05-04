import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartnerSearchSelectedPage } from './partner-search-selected';
import { PartnerTabNavPageModule } from "../../components/partner-tab-nav/partner-tab-nav.module";

@NgModule({
  declarations: [
    PartnerSearchSelectedPage,
  ],
  imports: [
    IonicPageModule.forChild(PartnerSearchSelectedPage), PartnerTabNavPageModule
  ],
})
export class PartnerSearchSelectedPageModule {}
