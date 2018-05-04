import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmTablePage } from './confirm-table';

@NgModule({
  declarations: [
    ConfirmTablePage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmTablePage),
  ],
})
export class ConfirmTablePageModule {}
