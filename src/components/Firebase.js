import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCOnClCsTzu2-NEFYUAl2UOpSHYEhH7ytM",
    authDomain: "personalpage-deda2.firebaseapp.com",
    databaseURL: "https://personalpage-deda2.firebaseio.com",
    projectId: "personalpage-deda2",
    storageBucket: "personalpage-deda2.appspot.com",
    messagingSenderId: "505491210713",
    appId: "1:505491210713:web:9e6691b26fca1f406d59c8",
    measurementId: "G-Z1EHPMFP4M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerFacebook=new firebase.auth.FacebookAuthProvider();
export const providerTwitter=new firebase.auth.TwitterAuthProvider();
export const auth = firebase.auth();
export default firebase;
