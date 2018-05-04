//the search page is the main page of the WhyWait application. Users can search by keyword.

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PartnerSearchPage } from "../partner-search/partner-search";
import { PartnerProvider } from "../../providers/partner/partner";
import { UserProvider } from "../../providers/user/user";
import { AuthProvider } from "../../providers/auth/auth";
import { ViewMenuPage } from "../view-menu/view-menu";
import { EditPartnerProfilePage } from "../edit-partner-profile/edit-partner-profile";
import { EditMenuPage } from "../edit-menu/edit-menu";
import { WriteReviewPage } from "../write-review/write-review";
import { ManageTablesPage } from "../manage-tables/manage-tables";
import { EditUserProfilePage } from "../edit-user-profile/edit-user-profile";

@IonicPage()
@Component({
    selector: 'page-search',
    templateUrl: 'search.html',
})
export class SearchPage {
    partnerId;
    recentVisitList = [];
    recentVisitDetails = [];
    businessInfo = [];
    i;
    public provider = {};
    constructor(public navCtrl: NavController, public navParams: NavParams, public partnerProvider: PartnerProvider, public userProvider: UserProvider,
                public authProvider: AuthProvider, public modalCtrl: ModalController) {

    }

    searchByKeyword(searchTerm){
        this.navCtrl.push('PartnerSearchPage', {searchTerm: searchTerm});
    }

    goToSelectedPartner(partnerid): void {
        console.log(partnerid);
        this.navCtrl.push('PartnerSearchSelectedPage', {partnerId: partnerid});
    }

    goToProfile(): void {
        this.navCtrl.push('UserProfilePage');
    }

    goToEditProfile(): void {
        this.navCtrl.push('EditUserProfilePage');
    }

    goToList(): void {
        this.navCtrl.push(ViewMenuPage);
    }

    editPartnerProfile(): void {
        this.navCtrl.push(EditPartnerProfilePage);
    }

    editMenu(): void {
        this.navCtrl.push(EditMenuPage);
    }

    createReview(): void {
        this.navCtrl.push(WriteReviewPage);
    }

    goToManageTables(): void {
        this.navCtrl.push(ManageTablesPage);
    }
}