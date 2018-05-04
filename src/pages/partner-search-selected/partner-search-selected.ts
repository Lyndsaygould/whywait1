import {Component, ElementRef, ViewChild} from '@angular/core';
import { Content } from "ionic-angular";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookTablePage } from "../book-table/book-table";
import { ViewMenuPage } from "../view-menu/view-menu";
import { ModalController } from "ionic-angular";
import { PartnerProvider } from "../../providers/partner/partner";
import { UserProvider } from "../../providers/user/user";
import {} from '@types/googlemaps';
import {GoogleMapsProvider} from "../../providers/google-maps/google-maps";

@IonicPage()
@Component({
    selector: 'page-partner-search-selected',
    templateUrl: 'partner-search-selected.html'
})

export class PartnerSearchSelectedPage {

    @ViewChild(Content) content: Content;
    public showNavbar: boolean;

    public hideNavbar(): void {
        this.showNavbar = false;

        // You should resize the content to use the space left by the navbar
        this.content.resize();
    }
    businessInfo = [];
    partnerId; map; lat; lng; businessName;

    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
                public partnerProvider: PartnerProvider, public userProvider: UserProvider, public maps: GoogleMapsProvider) {
        this.partnerId = navParams.get('partnerId');
        this.partnerProvider.getSelectedPartnerInfo(this.partnerId).on('value', businessInfoSnapshot => {
            this.businessInfo = businessInfoSnapshot.val();
            this.lat = businessInfoSnapshot.val().latitude;
            this.lng = businessInfoSnapshot.val().longitude;
        })
    };

    initMap() {

        this.map = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
        let myLatlng = new google.maps.LatLng(this.lat, this.lng);
        let marker = new google.maps.Marker({
            position: myLatlng,
            title:"Hello World!"
        });

        marker.setMap(this.map);
    }

    ionViewDidLoad() {
        this.initMap();
    }

    openBooking() {
        let myModal = this.modalCtrl.create(BookTablePage, {partnerId: this.partnerId});
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

    addToFavourites(businessInfo) {
        this.userProvider.addToFavourites(this.partnerId, businessInfo);
    }

}
