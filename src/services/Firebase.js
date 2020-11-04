import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
   
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();
const providerTwitter = new firebase.auth.TwitterAuthProvider();

export const signInWithGoogle =()=>{
    auth.signInWithPopup(providerGoogle).then((r)=>{
        console.log('Logged in')
    }).catch((err)=>{
        console.log(err.message)
    })
}
export const signInWithTwitter=()=>{
    auth.signInWithPopup(providerTwitter).then((r)=>{
        console.log('Logged in')
    }).catch((err)=> {
        console.log(err.user)
    })
};
export const signInWithFacebook=()=>{
    auth.signInWithPopup(providerFacebook).then((r)=>{
        console.log('Logged in')
    }).catch((err)=> {
        console.log(err.user)
    })
};
export const signInWithEmail=(email,setMessage)=>{
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be whitelisted in the Firebase Console.
        url: 'https://personalpage-deda2.web.app',
        // This must be true.
        handleCodeInApp: true
    };
    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        .then(()=> {
           // this.setState({message:"Sign in mail sent to your email address!!"})
            window.localStorage.setItem('emailForSignIn', email);
            setMessage('An authentication link sent to your email address!')
        })
        .catch((err)=> {
            // Some error occurred, you can inspect the code: error.c
            //this.setState({message: r.message});
            setMessage(err.message)
        })
    // Confirm the link is a sign-in with email link.
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
            // User opened the link on a different device. To prevent session fixation
            // attacks, ask the user to provide the associated email again. For example:
            email = window.prompt('Please provide your email for confirmation');
        }
        // The client SDK will parse the code from the link for you.
        firebase.auth().signInWithEmailLink(email, window.location.href)
            .then((result)=> {
                // Clear email from storage.
                window.localStorage.removeItem('emailForSignIn');
                // You can access the new user via result.user
                // Additional user info profile not available via:
                // result.additionalUserInfo.profile == null
                // You can check if the user is new or existing:
                // result.additionalUserInfo.isNewUser
            })
            .catch((err)=> {
                //
            });
    }
}
export const logOut=(event)=>{
    event.preventDefault();
    firebase.auth().signOut().then(()=>{
        window.location.reload(false)
    }).catch((err)=>{
        console.log(err.message)
    });
}
export const auth = firebase.auth();
export default firebase;
