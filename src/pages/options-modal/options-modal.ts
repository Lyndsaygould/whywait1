import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-options-modal',
    templateUrl: 'options-modal.html'
})
export class OptionsModalPage {
    itemName: string = this.navParams.get('itemName');
    quantity: number;
    constructor(public viewCtrl: ViewController, public navParams: NavParams) {
        this.quantity = 1;
    }

    closeModal() {
        this.viewCtrl.dismiss();
    }
}