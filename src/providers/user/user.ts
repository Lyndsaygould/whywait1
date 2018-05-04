import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { User, AuthCredential } from '@firebase/auth-types';
import { Reference, ThenableReference } from '@firebase/database-types';

@Injectable()
export class UserProvider {
    userProfile: Reference;
    currentUser: User;
    getRecentRef: Reference;
    addToRecentRef: Reference;
    recentVisitList = [];
    addToFavRef;

    constructor() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.currentUser = user;
                this.userProfile = firebase.database().ref(`/userProfile/${user.uid}`);
                this.getRecentRef = firebase.database().ref(`/recentlyVisited/${user.uid}/`);
                this.addToRecentRef = firebase.database().ref(`/recentlyVisited/${user.uid}/`);
                this.getRecentRef = firebase.database().ref(`/recentlyVisited/${user.uid}/`);
                this.addToFavRef = firebase.database().ref(`/favourites/${user.uid}/`);
            }
        });
    }

    getUserProfile(): Reference {
        return this.userProfile;
    }

    updateName(firstName: string, lastName: string): Promise<any> {
        return this.userProfile.update({firstName, lastName});
    }

    updateDOB(birthDate: string): Promise<any> {
        return this.userProfile.update({birthDate});
    }

    updateEmail(newEmail: string, password: string): Promise<any> {
        const credential: AuthCredential = firebase.auth.EmailAuthProvider.credential(
            this.currentUser.email,
            password
        );
        return this.currentUser
            .reauthenticateWithCredential(credential)
            .then(user => {
                this.currentUser.updateEmail(newEmail).then(user => {
                    this.userProfile.update({email: newEmail});
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    updatePassword(newPassword: string, oldPassword: string): Promise<any> {
        const credential: AuthCredential = firebase.auth.EmailAuthProvider.credential(
            this.currentUser.email,
            oldPassword
        );

        return this.currentUser
            .reauthenticateWithCredential(credential)
            .then(user => {
                this.currentUser.updatePassword(newPassword).then(user => {
                    console.log('Password Changed');
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    addToRecentVisit(partnerId: string, businessInfo): ThenableReference {
        return this.addToRecentRef.push({
            businessID: partnerId,
            businessInfo: businessInfo
        });
    }

    getRecentVisit(): Reference {
        return this.getRecentRef;
    }

    addToFavourites(businessId, businessInfo) {
        return this.addToFavRef.push({
            businessID: businessId,
            businessName: businessInfo.businessName
        })
    }
}