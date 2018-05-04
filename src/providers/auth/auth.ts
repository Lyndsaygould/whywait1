import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthProvider {
    constructor() {}

    //function for logging the user in by email and password
    loginUser(email: string, password: string): Promise<any> {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    //function for signing new users up using email and password
    //will also log user in automatically
    signupUser(email: string, password: string): Promise<any> {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)

            //return promise, this happens when the user is registered and then logged in

            .then(newUser => {
                firebase
                    .database()
                    //reference to the userProfile node inside our database.
                    //creating a new node inside the userProfile node, and the UID identifies the unique identifer for user
                    .ref(`/userProfile/${newUser.uid}/email`)
                    .set(email);
            })
            .catch(error => {
                console.error(error);
                throw new Error(error);
            });
    }

    resetPassword(email:string): Promise<void> {
        return firebase.auth().sendPasswordResetEmail(email);
    }

    logoutUser():Promise<void> {
        const userId: string = firebase.auth().currentUser.uid;
        firebase
            .database()
            .ref(`/userProfile/${userId}`)
            .off();

        return firebase.auth().signOut();
    }

}
