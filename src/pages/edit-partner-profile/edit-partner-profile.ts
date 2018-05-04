import { Component } from '@angular/core';
import {
    Alert,
    AlertController,
    IonicPage,
    NavController
} from 'ionic-angular';
import { PartnerProvider } from "../../providers/partner/partner";

@IonicPage()
@Component({
  selector: 'page-edit-partner-profile',
  templateUrl: 'edit-partner-profile.html',
})
export class EditPartnerProfilePage {

  public businessInfo: any;
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public partnerProvider: PartnerProvider) {}

    ionViewDidLoad() {
        this.partnerProvider.getCurrentPartnerInfo().on('value', businessInfoSnapshot => {
            this.businessInfo = businessInfoSnapshot.val();
        });

        console.log(this.businessInfo)
    }

    updateBusName(): void {
        const alert: Alert = this.alertCtrl.create({
            message: 'Your business name',
            inputs: [
                {
                    name: 'businessName',
                    placeholder: 'Your business name'
                }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: data => {
                        this.partnerProvider.updateBusName(data.businessName);
                    }
                }
            ]
        });
        alert.present();
    }

    updateBusDesc(): void {
        let alert: Alert = this.alertCtrl.create({
            inputs: [
                { name: 'newDesc', placeholder: 'Your new description' }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: data => {
                        this.partnerProvider
                            .updateBusDesc(data.newDesc)
                            .then(() => {
                                console.log('Description Changed Successfully');
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

    updateBusPhone(): void {
        let alert: Alert = this.alertCtrl.create({
            inputs: [
                { name: 'newPhone', placeholder: 'Your new phone number' }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: data => {
                        this.partnerProvider
                            .updateBusPhone(data.newPhone)
                            .then(() => {
                                console.log('Address Changed Successfully');
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

    updateBusAddress(): void {
        let alert: Alert = this.alertCtrl.create({
            inputs: [
                { name: 'newAddress', placeholder: 'Your new address' }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: data => {
                        this.partnerProvider
                            .updateBusAddress(data.newAddress)
                            .then(() => {
                                console.log('Address Changed Successfully');
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

    updateBusPostcode (): void {
        let alert: Alert = this.alertCtrl.create({
            inputs: [
                { name: 'newPostcode', placeholder: 'Your new postcode' }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: data => {
                        this.partnerProvider
                            .updateBusPostcode(data.newPostcode)
                            .then(() => {
                                console.log('Address Changed Successfully');
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

    updateBusManager(): void {
        let alert: Alert = this.alertCtrl.create({
            inputs: [
                { name: 'newManager', placeholder: 'Your new manager' }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: data => {
                        this.partnerProvider
                            .updateBusManager(data.newManager)
                            .then(() => {
                                console.log('Address Changed Successfully');
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

    updateBusCountry(): void {
        let alert: Alert = this.alertCtrl.create({
            inputs: [
                { name: 'newCountry', placeholder: 'Your new country' }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: data => {
                        this.partnerProvider
                            .updateBusCountry(data.newCountry)
                            .then(() => {
                                console.log('Address Changed Successfully');
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

    updateBusFacilities(): void {
        let alert: Alert = this.alertCtrl.create({
            inputs: [
                { name: 'newFacilities', placeholder: 'Your new facilities' }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: data => {
                        this.partnerProvider
                            .updateBusFacilities(data.newFacilities)
                            .then(() => {
                                console.log('Facilities Changed Successfully');
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

    updateBusType(): void {
        let alert: Alert = this.alertCtrl.create({
            inputs: [
                { name: 'newType', placeholder: 'Your new address' }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: data => {
                        this.partnerProvider
                            .updateBusType(data.newType)
                            .then(() => {
                                console.log('Type Changed Successfully');
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
}
