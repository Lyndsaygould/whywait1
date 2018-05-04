import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';
import { OrderProvider } from '../../providers/order/order';

@Component({
    selector: 'page-confirm-order',
    templateUrl: 'confirm-order.html',
})

export class ConfirmOrderPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }
}
