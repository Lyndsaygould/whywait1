import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { PartnerProvider } from "../../providers/partner/partner";

@Component({
    selector: "page-partner-profile",
    templateUrl: "partner-profile.html"
})
export class PartnerProfilePage {
    constructor(
        public navCtrl: NavController,
        public partnerProvider: PartnerProvider,
    ) {}

    createPartnerInfo(
        businessType: string,
        businessName: string,
        businessManager: string,
        businessDesc: string,
        businessAddress: string,
        businessPostcode: string,
        businessCountry: string,
        businessPhone: string,
        businessFacilities: string
    ): void {
        this.partnerProvider
            .createPartnerInfo(businessType, businessName, businessManager, businessDesc, businessAddress, businessPostcode,
                businessCountry, businessPhone, businessFacilities)
            .then(newItem => {
                this.navCtrl.pop();
            });
    }
}
