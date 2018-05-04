import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import {BookTableProvider} from "../../providers/book-table/book-table";

@IonicPage()
@Component({
  selector: 'page-manage-tables',
  templateUrl: 'manage-tables.html',
})
export class ManageTablesPage {
    viewTitle: string;
    selectedDay = new Date();
    calendar = {
        mode: 'month',
        currentDate: new Date()
    };

    constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController, private bookingProvider: BookTableProvider) {}

    eventSource = [];

    ionViewDidLoad() {
        this.bookingProvider.getBookings().on("value",eventSourceSnapshot => {
            eventSourceSnapshot.forEach(snap => {
                this.eventSource.push({
                    id: snap.key,
                    title: snap.val().title,
                    startTime: snap.val().startTime,
                    allDay: snap.val().allDay
                });
                return false;
            });
            console.log(this.eventSource);
        });
    }

    addBooking() {
        let modal = this.modalCtrl.create('BookingModalPage', {selectedDay: this.selectedDay});
        modal.present();
        modal.onDidDismiss(data => {
            if (data) {
                let eventData = data;
                eventData.bookingDate = new Date(data.bookingDate);
                eventData.bookingTime = new Date(data.bookingTime);
            }
        });
    }

    onViewTitleChanged(title) {
        this.viewTitle = title;
    }

    onEventSelected(event) {
        let start = moment(event.bookingDate).format('LLLL');
        let end = moment(event.bookingTime).format('LLLL');

        let alert = this.alertCtrl.create({
            title: '' + event.title,
            subTitle: 'From: ' + start + '<br>To: ' + end,
            buttons: ['OK']
        })
        alert.present();
    }

    onTimeSelected(ev) {
        this.selectedDay = ev.selectedTime;
    }
}