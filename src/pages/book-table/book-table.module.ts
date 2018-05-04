import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookTablePage } from './book-table';

@NgModule({
  declarations: [
    BookTablePage,
  ],
  imports: [
    IonicPageModule.forChild(BookTablePage)
  ],
})
export class BookTablePageModule {}
