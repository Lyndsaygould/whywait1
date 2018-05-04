import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomiseItemPage } from './customise-item';

@NgModule({
  declarations: [
    CustomiseItemPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomiseItemPage),
  ],
})
export class CustomiseItemPageModule {}
