import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagePaymentPage } from './manage-payment';

@NgModule({
  declarations: [
    ManagePaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagePaymentPage),
  ],
})
export class ManagePaymentPageModule {}
