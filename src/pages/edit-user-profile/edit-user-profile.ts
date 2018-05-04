import { Component } from '@angular/core';
import { Alert, AlertController, IonicPage, NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { AuthProvider } from '../../providers/auth/auth';
import {SearchPage} from "../search/search";

@IonicPage()
@Component({
    selector: 'page-edit-user-profile',
    templateUrl: 'edit-user-profile.html'
})
export class EditUserProfilePage {
    public userProfile: any;
    public birthDate: string;

    constructor(
        public navCtrl: NavController,
        public alertCtrl: AlertController,
        public authProvider: AuthProvider,
        public profileProvider: UserProvider
    ) {}

    ionViewDidLoad() {
        this.profileProvider.getUserProfile().on('value', userProfileSnapshot => {
            this.userProfile = userProfileSnapshot.val();
            this.birthDate = userProfileSnapshot.val().birthDate;
        });
    }

    logOut(): void {
        this.authProvider.logoutUser().then(() => {
            this.navCtrl.setRoot('LoginPage');
        });
    }

    updateName(): void {
        const alert: Alert = this.alertCtrl.create({
            message: 'Your first name & last name',
            inputs: [
                {
                    name: 'firstName',
                    placeholder: 'Your first name',
                    value: this.userProfile.firstName
                },
                {
                    name: 'lastName',
                    placeholder: 'Your last name',
                    value: this.userProfile.lastName
                }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: data => {
                        this.profileProvider.updateName(data.firstName, data.lastName);
                    }
                }
            ]
        });
        alert.present();
    }

    updateDOB(birthDate: string): void {
        this.profileProvider.updateDOB(birthDate);
    }

    updateEmail(): void {
        let alert: Alert = this.alertCtrl.create({
            inputs: [
                { name: 'newEmail', placeholder: 'Your new email' },
                { name: 'password', placeholder: 'Your password', type: 'password' }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: data => {
                        this.profileProvider
                            .updateEmail(data.newEmail, data.password)
                            .then(() => {
                                console.log('Email Changed Successfully');
                            })
                            .catch(error => {
                                console.log('ERROR: ' + error.message);
                            });
                    }
                }
            ]
        });
        alert.present();
    }

    updatePassword(): void {
        let alert: Alert = this.alertCtrl.create({
            inputs: [
                { name: 'newPassword', placeholder: 'New password', type: 'password' },
                { name: 'oldPassword', placeholder: 'Old password', type: 'password' }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: data => {
                        this.profileProvider.updatePassword(
                            data.newPassword,
                            data.oldPassword
                        );
                    }
                }
            ]
        });
        alert.present();
    }

    goToSearchPage() {
        this.navCtrl.push(SearchPage);
    }
}