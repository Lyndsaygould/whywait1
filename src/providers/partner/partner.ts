import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Reference, ThenableReference } from '@firebase/database-types';
import {firebaseConfig} from "../../app/credentials";

@Injectable()
export class PartnerProvider {
    public partnerInfoRef: Reference;
    public pullAllPartnerInfo: Reference;
    public businessInfoRef: Reference;
    public currentUser;
    public selectedPartnerInfoRef: Reference;
    public searchResults = [];
    public recentVisitListDetails = [];
    constructor() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.partnerInfoRef = firebase
                    .database ()
                    .ref('/userProfile/' + user.uid );

                //reference current user
                this.currentUser = user;
                //used when pulling/editing/deleting current user business profile
                this.businessInfoRef = firebase
                    .database()
                    .ref(`/businessInfo/${user.uid}`);
            }

            //pulls all business information for every user
            this.pullAllPartnerInfo = firebase
                .database ()
                .ref('/businessInfo/' );

        });
    }
        filterItems(searchTerm) {
        return this.pullAllPartnerInfo.orderByChild("businessName").equalTo(searchTerm);
    }

        createPartnerInfo(
                      businessType: string,
                      businessName: string,
                      businessManager: string,
                      businessDesc: string,
                      businessAddress: string,
                      businessPostcode: string,
                      businessCountry: string,
                      businessPhone: string,
                      businessFacilities: string): ThenableReference {
        return this.businessInfoRef.push({
            businessType: businessType,
            businessName: businessName,
            businessManager: businessManager,
            businessDesc: businessDesc,
            businessAddress: businessAddress,
            businessPostcode: businessPostcode,
            businessCountry: businessCountry,
            businessPhone: businessPhone,
            businessFacilities: businessFacilities
        })
    }
    getPartnerInfo(): Reference {
        return this.partnerInfoRef;
    }

    goToPartnerInfo(partnerId: string): Reference {
        return this.partnerInfoRef.child(partnerId);
    }

    getAllPartnerInfo(): Reference {
        return this.pullAllPartnerInfo;
    }

    getCurrentPartnerInfo(): Reference {
        return this.businessInfoRef;
    }

    getSelectedPartnerInfo(partnerId): Reference {
        //pulls all business information for every user
        this.selectedPartnerInfoRef = firebase
            .database ()
            .ref('/businessInfo/' + partnerId );
        return this.selectedPartnerInfoRef;
    }

    updateBusName(businessName: string): Promise<any> {
        return this.businessInfoRef.update({ businessName });
    }

    updateBusDesc(businessDesc: string): Promise<any> {
        return this.businessInfoRef.update({ businessDesc });
    }

    updateBusPhone(businessPhone: string): Promise<any> {
        return this.businessInfoRef.update({ businessPhone });
    }

    updateBusAddress(businessAddress: string): Promise<any> {
        return this.businessInfoRef.update({ businessAddress });
    }

    updateBusPostcode(businessPostcode: string): Promise<any> {
        return this.businessInfoRef.update({ businessPostcode });
    }

    updateBusCountry(businessCountry: string): Promise<any> {
        return this.businessInfoRef.update({ businessCountry });
    }

    updateBusFacilities(businessFacilities: string): Promise<any> {
        return this.businessInfoRef.update({ businessFacilities });
    }

    updateBusManager(businessManager: string): Promise<any> {
        return this.businessInfoRef.update({ businessManager });
    }

    updateBusType(businessType: string): Promise<any> {
        return this.businessInfoRef.update({ businessType });
    }
}
