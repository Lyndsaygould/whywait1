import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';

@IonicPage()
@Component({
    selector: 'page-list',
    templateUrl: 'list.html',
})
export class ListPage {
    information;
    getItems = [];
    items = [];
    constructor(public navCtrl: NavController, public locations: LocationsProvider) {
        this.information = locations.data;

        for (var x = 0; x < this.information.length; x++){
            this.getItems.push({
                id: this.information[x].id,
                businessName: this.information[x].businessName,
                distance: this.information[x].distance
            })
        }
    }

    ngOnInit() {
        this.setItems();
    }

    setItems() {
        this.items = this.getItems;
    }

    filterItems(ev: any) {
        this.setItems();
        let val = ev.target.value;

        if (val && val.trim() !== '') {
            this.items = this.items.filter(function(item) {
                return item.businessName.toLowerCase().includes(val.toLowerCase());
            });
        }
    }

    goToSelectedPartner(partnerid): void {
        console.log(partnerid);
        this.navCtrl.push('PartnerSearchSelectedPage', {partnerId: partnerid});
    }
}