import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignInPage } from "../pages/sign-in/sign-in";
import { SignUpPage } from "../pages/sign-up/sign-up";
import { SignUpContinuedPage } from "../pages/sign-up-continued/sign-up-continued";
import { SearchPage } from "../pages/search/search";
import { PartnerSearchSelectedPage } from "../pages/partner-search-selected/partner-search-selected";
import { BookTablePage } from "../pages/book-table/book-table";
import { ViewMenuPage } from "../pages/view-menu/view-menu";

import { UserProvider } from '../providers/user/user';
import { AuthProvider } from '../providers/auth/auth';
import { PartnerProvider } from '../providers/partner/partner';
import { SignInPageModule } from "../pages/sign-in/sign-in.module";
import { MenuProvider } from "../providers/menu/menu";
import { ManageMenuPage } from "../pages/manage-menu/manage-menu";
import { EditMenuPage } from "../pages/edit-menu/edit-menu";
import { PartnerSearchPageModule } from "../pages/partner-search/partner-search.module";
import { EditPartnerProfilePage } from "../pages/edit-partner-profile/edit-partner-profile";
import { ReviewsProvider } from '../providers/reviews/reviews';
import { WriteReviewPage } from "../pages/write-review/write-review";

import { NgCalendarModule } from "ionic2-calendar";
import { ManageTablesPage } from "../pages/manage-tables/manage-tables";
import { BookTableProvider } from '../providers/book-table/book-table';
import { OrderProvider } from '../providers/order/order';
import {ConfirmOrderPage} from "../pages/confirm-order/confirm-order";
import {CheckoutPage} from "../pages/checkout/checkout";
import {ViewOrderPage} from "../pages/view-order/view-order";
import {OptionsModalPage} from "../pages/options-modal/options-modal";
import {PartnerSearchSelectedPageModule} from "../pages/partner-search-selected/partner-search-selected.module";
import {SearchPageModule} from "../pages/search/search.module";
import {SignUpPageModule} from "../pages/sign-up/sign-up.module";
import {EditUserProfilePage} from "../pages/edit-user-profile/edit-user-profile";
import {EditUserProfilePageModule} from "../pages/edit-user-profile/edit-user-profile.module";

import {ConnectivityProvider} from '../providers/connectivity/connectivity';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps'
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import {MapPage} from '../pages/map/map';
import {ListPage} from '../pages/list/list';
import {HttpModule} from "@angular/http";
import {LocationsProvider} from "../providers/locations/locations";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
      SignUpContinuedPage,
      BookTablePage,
      ViewMenuPage,
      ManageMenuPage,
      EditMenuPage,
      WriteReviewPage,
      ManageTablesPage,
      ConfirmOrderPage,
      CheckoutPage,
      ViewOrderPage,
      OptionsModalPage,
      EditPartnerProfilePage,
      MapPage,
      ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      SignInPageModule,
      PartnerSearchPageModule,
      PartnerSearchSelectedPageModule,
      NgCalendarModule,
      SearchPageModule,
      SignUpPageModule,
      EditUserProfilePageModule,
      HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      SignInPage,
      SignUpPage,
      SignUpContinuedPage,
      SearchPage,
      PartnerSearchSelectedPage,
      BookTablePage,
      ViewMenuPage,
      ManageMenuPage,
      EditMenuPage,
      EditPartnerProfilePage,
      WriteReviewPage,
      ManageTablesPage,
      ConfirmOrderPage,
      CheckoutPage,
      ViewOrderPage,
      OptionsModalPage,
      EditUserProfilePage,
      MapPage,
      ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    AuthProvider,
    PartnerProvider,
    MenuProvider,
    ReviewsProvider,
    BookTableProvider,
    OrderProvider,
    ConnectivityProvider,
    GoogleMapsProvider,
      Network,
      Geolocation,
    LocationsProvider
  ]
})
export class AppModule {}
