import { Component, ViewChild } from '@angular/core';
import { Content, IonicPage, NavController, NavParams } from 'ionic-angular';
import {PartnerSearchSelectedPage} from "../partner-search-selected/partner-search-selected";
import {ViewMenuPage} from "../view-menu/view-menu";
import {ViewController} from "ionic-angular";
import {ToastController} from "ionic-angular";
import * as moment from 'moment';
import { BookTableProvider } from "../../providers/book-table/book-table";
import {PartnerProvider} from "../../providers/partner/partner";


@IonicPage()
@Component({
  selector: 'page-book-table',
  templateUrl: 'book-table.html'
})

export class BookTablePage {
    @ViewChild(Content) content: Content;
    public showNavbar: boolean;
    public hideNavbar(): void {
        this.showNavbar = false;
        // You should resize the content to use the space left by the navbar
        this.content.resize();
    }

    event = { bookingDate: new Date().toISOString(), bookingTime: new Date().toISOString(), allDay: false };
    bookingDate = new Date().toISOString();
    bookingTime = new Date().toISOString();
    bookingName: string;
    numberOfPeople: number;
    allDay: boolean;
    minDate: string = new Date().toISOString();
    partnerId;
    businessInfo = [];
    businessName;

    constructor(public navCtrl: NavController, private navParams: NavParams, private toastCtrl: ToastController, private viewCtrl: ViewController,
    public bookingProvider: BookTableProvider, public partnerProvider: PartnerProvider) {
        this.partnerId = navParams.get('partnerId');
        this.partnerProvider.getSelectedPartnerInfo(this.partnerId).on('value', businessInfoSnapshot => {
            this.businessInfo = businessInfoSnapshot.val();
            this.businessName = businessInfoSnapshot.val().businessName;
        });
        //have 2 as the default option for number of people when booking a table
        this.numberOfPeople = 2;

        if (this.dst(new Date())) {
            this.bookingTime = this.calculateTime('+1');
        }
    }


    calculateTime(offset: any) {
        // create Date object for current location
        let d = new Date();

        // create new Date object for different city
        // using supplied offset
        let nd = new Date(d.getTime() + (3600000 * offset));

        return nd.toISOString();
    }

    // Determine if the client uses DST
    stdTimezoneOffset(today: any) {
        let jan = new Date(today.getFullYear(), 0, 1);
        let jul = new Date(today.getFullYear(), 6, 1);
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    }

    dst(today: any) {
        return today.getTimezoneOffset() < this.stdTimezoneOffset(today);
    }

    cancel() {
        this.viewCtrl.dismiss();
    }

    close() {
        this.viewCtrl.dismiss(this.event);
    }

    save(
        bookingDate: string,
        bookingTime: string,
        bookingName: string,
        numberOfPeople: string,
        allDay: boolean
    ): void {
        this.bookingProvider
            .createBooking(bookingDate, bookingTime, bookingName, numberOfPeople, allDay);
        this.viewCtrl.dismiss(this.event)

    }

    closeModal() {
        this.viewCtrl.dismiss();
    }

    pushBookTable(){
        this.navCtrl.push(BookTablePage);
    }

    pushInfo(){
        this.navCtrl.push(PartnerSearchSelectedPage);
    }

    pushViewMenu(){
        this.navCtrl.push(ViewMenuPage)
    }

}
