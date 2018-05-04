import { Component, ViewChild } from '@angular/core';
import {Content, IonicPage, NavController} from "ionic-angular";
import { MenuProvider } from "../../providers/menu/menu";
import {ViewController} from "ionic-angular";

@Component({
    selector: "page-manage-menus",
    templateUrl: "manage-menu.html"
})
export class ManageMenuPage {

    @ViewChild(Content) content: Content;
    public showNavbar: boolean;
    public hideNavbar(): void {
        this.showNavbar = false;
        // You should resize the content to use the space left by the navbar
        this.content.resize();
    }

    constructor(
        public navCtrl: NavController,
        public menuProvider: MenuProvider,
        private viewCtrl: ViewController
    ) {}

    createItem(
        itemName: string,
        itemType: string,
        itemPrice: number,
        itemDesc: string
    ): void {
        this.menuProvider
            .createItem(itemName, itemType, itemPrice, itemDesc)
            .then(newItem => {
                this.viewCtrl.dismiss()
            });
    }

    closeModal() {
        this.viewCtrl.dismiss();
    }
}
