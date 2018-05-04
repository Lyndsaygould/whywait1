import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageTablesPage } from './manage-tables';

@NgModule({
  declarations: [
    ManageTablesPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageTablesPage),
  ],
})
export class ManageTablesPageModule {}
