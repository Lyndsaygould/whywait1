import { Component, ViewChild } from '@angular/core';
import { Content } from "ionic-angular";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookTablePage } from "../book-table/book-table";
import { PartnerSearchSelectedPage } from "../partner-search-selected/partner-search-selected";
import { ModalController } from "ionic-angular";
import { MenuProvider } from "../../providers/menu/menu";
import { OrderProvider } from "../../providers/order/order";
import { ToastController } from "ionic-angular";
import { ConfirmOrderPage } from "../confirm-order/confirm-order";
import {CheckoutPage} from "../checkout/checkout";
import {ViewOrderPage} from "../view-order/view-order";
import { OptionsModalPage } from "../options-modal/options-modal";

@Component({
    selector: 'page-view-menu',
    templateUrl: 'view-menu.html',
})

export class ViewMenuPage {

    @ViewChild(Content) content: Content;
    public showNavbar: boolean;

    public hideNavbar(): void {
        this.showNavbar = false;

        // You should resize the content to use the space left by the navbar
        this.content.resize();
    }
    partnerId = '';
      constructor(
          public navCtrl: NavController,
          public navParams: NavParams,
          public modalCtrl: ModalController,
          public menuProvider: MenuProvider,
          public orderProvider: OrderProvider,
          private toastCtrl: ToastController) {
          this.partnerId = navParams.get('partnerId');
      }

    openOptions(name) {
        let info = {itemName: name};
        let myModal = this.modalCtrl.create(OptionsModalPage, info);
        myModal.present();
    }

    itemList = [];

    ionViewDidLoad() {
        this.menuProvider.getItemList(this.partnerId).on("value", itemListSnapshot => {
            this.itemList = [];
            itemListSnapshot.forEach(snap => {
                this.itemList.push({
                    id: snap.key,
                    name: snap.val().name,
                    price: snap.val().price,
                    desc: snap.val().desc
                });
                return false;
            });
        });
    }

    addToOrder(itemName, itemPrice, qtd = 1) {
        const update = true;
        for (var i = 0; i < this.orderProvider.orders.length; i++) {
            if (this.orderProvider.orders[i].itemName.indexOf(itemName) >= 0) {
                qtd = qtd + 1;

                this.orderProvider.orders[i].qtd = qtd;
            }
        }
            this.orderProvider.orders.push({itemName: itemName, itemPrice: itemPrice, qtd: qtd});



        let toast = this.toastCtrl.create({
            message: this.orderProvider.orders.length + ' items',
            duration: 3000,
            position: 'bottom'
        });

        toast.present();
        console.log(this.orderProvider.orders)
    }

    checkout() {
        this.navCtrl.push(CheckoutPage);
    }

    viewOrder() {
        this.navCtrl.push(ViewOrderPage);
    }

    createItem(
        itemName: string,
        itemType: string,
        itemPrice: number,
        itemDesc: string
    ): void {
        this.menuProvider
            .createItem(itemName, itemType, itemPrice, itemDesc)
            .then(newItem => {
                this.navCtrl.pop();
            });
    }

    openBooking() {
        let myModal = this.modalCtrl.create(BookTablePage);
        myModal.present();
    }

    pushBookTable(){
        this.navCtrl.push(BookTablePage, {partnerId: this.partnerId});
    }

    pushInfo(){
        this.navCtrl.push(PartnerSearchSelectedPage, {partnerId: this.partnerId});
    }

    pushViewMenu(){
        this.navCtrl.push(ViewMenuPage, {partnerId: this.partnerId});
    }

}
