import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';
import { OrderProvider } from "../../providers/order/order";

@IonicPage()
@Component({
  selector: 'page-view-order',
  templateUrl: 'view-order.html',
})

export class ViewOrderPage {

    orders: Array<any> = [];
    totalVal: number = 0;

    constructor(public navCtrl: NavController, public navParams: NavParams, public orderProvider: OrderProvider) {
        this.getOrders();
    }

    removeOrder (order) {
        this.orderProvider.removefromCart(order)
            .then(() => {
                this.getOrders();
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    getOrders () {
        this.orderProvider.getOrders().then(orders => {
            this.orders = orders;
            console.log(orders);
            this.totalVal = 0;
            this.orders.forEach((val, i) => {
                this.totalVal = this.totalVal + (val.itemPrice * val.qtd)
            });
        });
    }

    // minus adult when click minus button
    minusQtd(order) {
        this.orderProvider.editQtdOrder(order, 'minus')
            .then(() => {
                this.getOrders();
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    // plus adult when click plus button
    plusQtd(order) {
        this.orderProvider.editQtdOrder(order, 'plus')
            .then(() => {
                this.getOrders();
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    openCheckout() {
        this.navCtrl.push(CheckoutPage, {orders: this.orders});
    }

}
