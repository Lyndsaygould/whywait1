import { Component } from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import { PartnerProvider } from "../../providers/partner/partner";

@IonicPage()
@Component({
    selector: "page-partner-search",
    templateUrl: "partner-search.html"
})
export class PartnerSearchPage {

    //declare searchTerm
    searchTerm: string = '';
    items: any;

    constructor(public navCtrl: NavController,
                public partnerProvider: PartnerProvider,
                public navParams: NavParams) {
        //get the searchTerm passed through from the searchPage (via searchByKeyword function)
        this.searchTerm = navParams.get('searchTerm');
    }

    //declare partnerList
    partnerList = [];

    //getAllPartnerInfo retrieves ALL partners from the data
    ionViewDidLoad() {
        this.partnerProvider.filterItems(this.searchTerm).on("value", partnerListSnapshot => {
            this.partnerList = [];
            partnerListSnapshot.forEach(snap => {
                this.partnerList.push({
                    businessId: snap.key,
                    businessType: snap.val().businessType,
                    businessName: snap.val().businessName,
                    businessManager: snap.val().businessManager,
                    businessDesc: snap.val().businessDesc,
                    businessAddress: snap.val().businessAddress,
                    businessPostcode: snap.val().businessPostcode,
                    businessCountry: snap.val().businessCountry,
                    businessPhone: snap.val().businessPhone,
                    businessFacilities: snap.val().businessFacilities
                });
                return false;
            });
            console.log(this.partnerList)
        });
    }


    goToSelectedPartner(partnerId): void {
        console.log(partnerId);
        this.navCtrl.push('PartnerSearchSelectedPage', {partnerId: partnerId});
    }
}