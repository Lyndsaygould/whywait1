import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { ReviewsProvider } from "../../providers/reviews/reviews";
@Component({
    selector: "page-write-review",
    templateUrl: "write-review.html"
})
export class WriteReviewPage {
    constructor(
        public navCtrl: NavController,
        public reviewsProvider: ReviewsProvider
    ) {}

    createReview(
        reviewAuthor: string,
        reviewTitle: string,
        reviewBody: string,
        reviewRating: number,
        reviewDate: string
    ): void {
        this.reviewsProvider
            .createReview(reviewAuthor, reviewTitle, reviewBody, reviewRating, reviewDate)
            .then(newItem => {
                this.navCtrl.pop();
            });
    }
}
