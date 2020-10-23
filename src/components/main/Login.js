import React, {useState,useContext,useEffect} from "react";
import '../../css/login.css'
import { signInWithGoogle,signInWithFacebook,signInWithTwitter,signInWithEmail} from "../../services/Firebase";
import {NavLink,Redirect} from "react-router-dom";
import { UserContext} from "../../providers/UserProvider";
import Alert from "../sub/Alert";

const Login =()=> {
    const user = useContext(UserContext)
    const [redirect, setRedirect] = useState(null)
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    useEffect(() => {
        if (user) {
            setRedirect('/dashboard')
        }
    }, [user])
    if (redirect) {
        return <Redirect to={redirect}/>;
    }
   const handleChange = event => {
      setEmail(event.target.value);
   };
   const openEmailForm =()=> {
        document.getElementById('email-form').style.display='inline-block';
        document.getElementById('btn-email').style.display='inline-block';
    }
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
                        <div className={'option-google'} onClick={signInWithGoogle}>
                            <i className={'fab fa-google'}/><span>Google</span>
                        </div>
                        <div className={'option-facebook'} onClick={signInWithFacebook}>
                            <i className={'fab fa-facebook-f'}/><span>Facebook</span>
                        </div>
                    </div>
                    <div className={'login-options-right'}>
                        <div className={'option-twitter'} onClick={signInWithTwitter}>
                            <i className={'fab fa-twitter'}/><span>Twitter</span>
                        </div>
                        <div className={'option-email'} onClick={openEmailForm}>
                            <i className={'far fa-envelope'}/><span>Mail</span>
                        </div>
                    </div>
                    <div className={'email-form'} id={'email-form'}
                         style={{display:'none'}}>
                        <form onSubmit={()=>signInWithEmail(email, setMessage)}>
                            <input type={'email'} id={'email'}
                                   value={email}
                                   placeholder={'Email'}
                                   onChange={handleChange}
                                   required
                            />
                            <button type={'submit'} className={'btn-button'} id={'btn-email'}
                                    style={{marginTop:'10px',width:'300px',borderRadius:'5px',padding:'12px' ,display:'none'}}>
                                Send Email
                            </button>
                        </form>
                    </div>
                    <p><strong>No registration required!</strong></p>
                    {message.length>0 &&  <Alert text={message}/>}
                    </div>
                </div>
        );
}
export default Login

