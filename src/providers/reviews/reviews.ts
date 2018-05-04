import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Reference, ThenableReference } from '@firebase/database-types';

@Injectable()
export class ReviewsProvider {
    public getReviewsRef: Reference;
    public makeReviewRef: Reference;
    public currentUser;

    constructor() {

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.getReviewsRef = firebase
                    .database ()
                    .ref('/reviews/' + user.uid );

                this.makeReviewRef = firebase
                    .database ()
                    .ref('/reviews/' );

                //reference current user
                this.currentUser = user;
            }
        });
    }

    createReview(
        reviewAuthor: string,
        reviewTitle: string,
        reviewBody: string,
        reviewRating: number,
        reviewDate: string): ThenableReference {
        return this.makeReviewRef.push({
            reviewAuthor: reviewAuthor,
            reviewTitle: reviewTitle,
            reviewBody: reviewBody,
            reviewRating: reviewRating,
            reviewDate: reviewDate
        })
    }
    getReviews(): Reference {
        return this.getReviewsRef;
    }
}
