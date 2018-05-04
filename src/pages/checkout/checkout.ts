import {Component} from "@angular/core";
import {NavController, NavParams, LoadingController, ToastController} from "ionic-angular";
import {Storage} from '@ionic/storage';
import {OrderProvider} from "../../providers/order/order";
import {HomePage} from "../home/home";

@Component({
    selector: 'page-checkout',
    templateUrl: 'checkout.html'
})
export class CheckoutPage {
}