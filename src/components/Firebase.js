import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerFacebook=new firebase.auth.FacebookAuthProvider();
export const providerTwitter=new firebase.auth.TwitterAuthProvider();
export const auth = firebase.auth();
export default firebase;
