import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from "../search/search";

/**
 * Generated class for the SignUpContinuedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up-continued',
  templateUrl: 'sign-up-continued.html',
})
export class SignUpContinuedPage {
  searchPage = SearchPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpContinuedPage');
  }

}
