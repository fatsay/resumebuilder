import React, {Component} from 'react';
import '../css/login.css'
import Alert from '../components/Alert'
import  firebase,{auth, providerFacebook, providerGoogle,providerTwitter} from './Firebase';
import {NavLink} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            message:''
        }
        this.signInWithGoogle=this.signInWithGoogle.bind(this);
        this.signInWithTwitter=this.signInWithTwitter.bind(this)
        this.signInWithFacebook=this.signInWithFacebook.bind(this);
        this.signInWithEmail=this.signInWithEmail.bind(this);
    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    signInWithGoogle=()=>{
        this.setState({message:""});
        auth.signInWithPopup(providerGoogle).then((user)=>{
            this.props.history.push('/resume')
        }).catch((result)=> {
            // Handle Errors here.
            this.setState({message:result.message})
        })
    };
    signInWithTwitter=()=>{
        this.setState({message:""});
        auth.signInWithPopup(providerTwitter).then(()=>{
            this.props.history.push('/resume')
        }).catch((result)=> {
            // Handle Errors here.
            this.setState({message:result.message})
        })
    };
    signInWithFacebook=()=>{
        this.setState({message:""});
        auth.signInWithPopup(providerFacebook).then(()=>{
            this.props.history.push('/resume')
        }).catch((result)=> {
            // Handle Errors here.
            this.setState({message:result.message})
        })
    };
    //needs to deploy app on 'https://personalpage-deda2.web.app'
    //to get it work!!
    signInWithEmail=(event)=>{
        event.preventDefault();
        this.setState({message:""});
        const email=this.state.email;
        const actionCodeSettings = {
            // URL you want to redirect back to. The domain (www.example.com) for this
            // URL must be whitelisted in the Firebase Console.
            url: 'https://personalpage-deda2.web.app',
            // This must be true.
            handleCodeInApp: true
        };
        firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
            .then(()=> {
                this.setState({message:"Sign in mail sent to your email address!!"})
                window.localStorage.setItem('emailForSignIn', email);
            })
            .catch((result)=> {
                // Some error occurred, you can inspect the code: error.c
                this.setState({message: result.message});
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
                .catch((result)=> {
                    this.setState({message: result.message});
                });
        }
    }
    openEmailForm =()=> {
        document.getElementById('email-form').style.display='inline-block';
        document.getElementById('btn-email').style.display='inline-block';
    }
    render() {
        return (
            <div className={'container-login'}>
                <div className={'container-top'}>
                    <i className="fas fa-edit fa-2x" id={'logo'}>
                        <NavLink to={'/home'}>resume builder</NavLink></i>
                </div>
                <div className={'login-box'}>
                    <div className={'login-header'}>
                        Log in
                    </div>
                    <div className={'login-header-text'}>
                        Easy connect with your email or social media account
                    </div>
                    <div className={'login-options-left'}>
                        <div className={'option-google'} onClick={this.signInWithGoogle}>
                            <i className={'fab fa-google'}/><span>Google</span>
                        </div>
                        <div className={'option-facebook'} onClick={this.signInWithFacebook}>
                            <i className={'fab fa-facebook-f'}/><span>Facebook</span>
                        </div>
                    </div>
                    <div className={'login-options-right'}>
                        <div className={'option-twitter'} onClick={this.signInWithTwitter}>
                            <i className={'fab fa-twitter'}/><span>Twitter</span>
                        </div>
                        <div className={'option-email'} onClick={this.openEmailForm}>
                            <i className={'far fa-envelope'}/><span>Mail</span>
                        </div>
                    </div>
                    <div className={'email-form'} id={'email-form'}
                         style={{display:'none'}}>
                        <form onSubmit={this.signInWithEmail}>
                            <input type={'email'} id={'email'}
                                   value={this.state.email}
                                   onChange={this.handleChange}
                                   placeholder={'Email'}
                                   required
                            />
                            <button type={'submit'} className={'btn-button'} id={'btn-email'}
                                    style={{marginTop:'10px',width:'300px',borderRadius:'5px',padding:'12px' ,display:'none'}}>
                                Send Email
                            </button>
                        </form>
                    </div>
                    <p><strong>No registration required!</strong></p>
                    {this.state.message.length>0 &&
                    <Alert text={this.state.message}/>}
                </div>
            </div>
        );
    }
}

export default Login;
