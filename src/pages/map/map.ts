import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';
import { LocationsProvider } from '../../providers/locations/locations';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

    latitude: number;
    longitude: number;
    autocompleteService: any;
    placesService: any;
    query: string = '';
    places: any = [];
    searchDisabled: boolean;
    saveDisabled: boolean;
    location: any;

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  constructor(public navCtrl: NavController, public maps: GoogleMapsProvider, public zone: NgZone, public platform: Platform, public geolocation: Geolocation,
              public locations: LocationsProvider) {
      this.searchDisabled = true;
      this.saveDisabled = true;
  }


  ionViewDidLoad() {

    this.platform.ready().then(() => {

      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {

          this.autocompleteService = new google.maps.places.AutocompleteService();
          this.placesService = new google.maps.places.PlacesService(this.maps.map);
          this.searchDisabled = false;

      });

      let locationsLoaded = this.locations.load();

      Promise.all([
        mapLoaded,
        locationsLoaded
      ]).then((result) => {

        let locations = result[1];

        for (let location of locations) {
          this.maps.addMarker(location.latitude, location.longitude);
        }

      });

    });

  }

    selectPlace(place){

        this.places = [];

        let location = {
            lat: null,
            lng: null,
            name: place.name
        };

        this.placesService.getDetails({placeId: place.place_id}, (details) => {

            this.zone.run(() => {

                location.name = details.name;
                location.lat = details.geometry.location.lat();
                location.lng = details.geometry.location.lng();
                this.saveDisabled = false;

                this.maps.map.setCenter({lat: location.lat, lng: location.lng});

                this.location = location;

            });

        });

    }

    searchPlace(){

        this.saveDisabled = true;

        if(this.query.length > 0 && !this.searchDisabled) {

            let config = {
                types: ['geocode'],
                input: this.query
            }

            this.autocompleteService.getPlacePredictions(config, (predictions, status) => {

                if(status == google.maps.places.PlacesServiceStatus.OK && predictions){

                    this.places = [];

                    predictions.forEach((prediction) => {
                        this.places.push(prediction);
                    });
                }

            });

        } else {
            this.places = [];
        }

    }

}
