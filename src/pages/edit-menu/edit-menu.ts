import { Component, ViewChild } from '@angular/core';
import { Content } from "ionic-angular";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookTablePage } from "../book-table/book-table";
import { PartnerSearchSelectedPage } from "../partner-search-selected/partner-search-selected";
import { ModalController } from "ionic-angular";
import { MenuProvider } from "../../providers/menu/menu";
import { ViewMenuPage } from "../view-menu/view-menu";
import {ManageMenuPage} from "../manage-menu/manage-menu";
@IonicPage()
@Component({
    selector: 'page-edit-menu',
    templateUrl: 'edit-menu.html',
})

export class EditMenuPage {

    @ViewChild(Content) content: Content;
    public showNavbar: boolean;

    public hideNavbar(): void {
        this.showNavbar = false;

        // You should resize the content to use the space left by the navbar
        this.content.resize();
    }

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public modalCtrl: ModalController,
        public menuProvider: MenuProvider) {
    }

    itemList = [];

    ionViewDidLoad() {
        this.menuProvider.editItemList().on("value", itemListSnapshot => {
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

    goToItemDetail(itemId):void {
        this.navCtrl.push('itemDetailPage', { itemId: itemId });
    }

    addItem() {
        let addModal = this.modalCtrl.create(ManageMenuPage);
        addModal.present();
    }

    openBooking() {
        let myModal = this.modalCtrl.create(BookTablePage);
        myModal.present();
    }

    pushBookTable(){
        this.navCtrl.push(BookTablePage);
    }

    pushInfo(){
        this.navCtrl.push(PartnerSearchSelectedPage);
    }

    pushViewMenu() {
        this.navCtrl.push(ViewMenuPage);

    }

}
