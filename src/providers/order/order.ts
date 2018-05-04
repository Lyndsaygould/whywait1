import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Reference, ThenableReference } from '@firebase/database-types';

@Injectable()
export class OrderProvider {
    public menuListRef: Reference;

    //store order from view-menu page
    orders = [];

    constructor() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.menuListRef = firebase
                    .database()
                    .ref(`/userProfile/${user.uid}/menuList`);
            }
        });
    }

    getOrders() {
        return Promise.resolve(this.orders);
    }

    removefromCart(order) {
        let index = this.orders.indexOf(order);
        if (index > -1) {
            this.orders.splice(index, 1);
        }
        return Promise.resolve();
    }

    editQtdOrder(order, op) {
        // let order = this.orders[id - 1]
        // let index = this.orders.indexOf(order);
        // let order;
        //   if (index > -1) {
        //     this.orders[index];
        //   }

        for (let i in this.orders) {
            if (this.orders[i].id === order.id) {
                if (op === 'minus') {
                    this.orders[i].qtd--;
                    break;
                }
                if (op === 'plus') {
                    this.orders[i].qtd++;
                    break;
                }
            }
        }
        return Promise.resolve();
    }

    cleanCart() {
        this.orders = [];
    }

    // findAll() {
    //   return Promise.resolve(restaurants);
    // }

    // findById(id) {
    //   return Promise.resolve(restaurants[id - 1]);
    // }

    // findByName(searchKey: string) {
    //   let key: string = searchKey.toUpperCase();
    //   return Promise.resolve(restaurants.filter((restaurant: any) =>
    //       (restaurant.title +  ' ' +restaurant.address +  ' ' + restaurant.city + ' ' + restaurant.description).toUpperCase().indexOf(key) > -1));
    // }

    // getFavorites() {
    //   return Promise.resolve(this.favorites);
    // }

    // favorite(restaurant) {
    //   this.favoriteCounter = this.favoriteCounter + 1;
    //   this.favorites.push({id: this.favoriteCounter, restaurant: restaurant});
    //   return Promise.resolve();
    // }

    // unfavorite(favorite) {
    //   let index = this.favorites.indexOf(favorite);
    //   if (index > -1) {
    //     this.favorites.splice(index, 1);
    //   }
    //   return Promise.resolve();
    // }

}