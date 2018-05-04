import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Reference, ThenableReference } from '@firebase/database-types';

@Injectable()
export class MenuProvider {
    public menuListRef: Reference;
    public addToMenuListRef: Reference;

    constructor() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.addToMenuListRef = firebase
                    .database()
                    .ref(`/menuInfo/${user.uid}`);
            }
        });
    }

    createItem(itemName: string,
               itemType: string,
               itemPrice: number,
               itemDesc: string): ThenableReference {
        return this.addToMenuListRef.push({
            name: itemName,
            type: itemType,
            price: itemPrice * 1,
            desc: itemDesc
        });
    }

    getItemList(partnerId): Reference {
        this.menuListRef = firebase
            .database()
            .ref('/menuInfo/' + partnerId);
        return this.menuListRef;
    }


    editItemList(): Reference {
        return this.addToMenuListRef;
    }

    goToItemDetail(itemId: string): Reference {
        return this.menuListRef.child(itemId);
    }
}
