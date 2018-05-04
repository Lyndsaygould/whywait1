import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-partner-tab-nav',
  templateUrl: 'partner-tab-nav.html',
})
export class PartnerTabNavPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    pushInfo(){
        this.navCtrl.push("PartnerSearchSelectedPage");
    }

    pushViewMenu() {
        this.navCtrl.push("ViewMenuPage");
    }

    pushBookTable() {
        this.navCtrl.push("BookTablePage");
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PartnerTabNavPage');
  }

}
