import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Reference, ThenableReference } from '@firebase/database-types';

@Injectable()
export class BookTableProvider {
    public tableBookingRef: Reference;
    public currentUser;

    constructor() {

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.tableBookingRef = firebase
                    .database ()
                    .ref('/tableBookings/' + user.uid );

                //reference current user
                this.currentUser = user;
            }

         })
    }

    createBooking(
        bookingDate: string,
        bookingTime: string,
        bookingName: string,
        numberOfPeople: string,
        allDay: boolean): ThenableReference {
        return this.tableBookingRef.push({
            bookingDate: bookingDate,
            bookingTime: bookingTime,
            bookingName: bookingName,
            numberOfPeople: numberOfPeople,
            allDay: allDay
        })
    }

    getBookings(): Reference {
        return this.tableBookingRef;
    }
}