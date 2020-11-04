import React, {useContext, useEffect, useState} from 'react';
import '../../css/createResume.css'

const Profile =(props)=>{
    const [summary,setSummary]=useState({profile:''})
    const handleChange = event => {
        setSummary({
            ...summary,
            [event.target.id]: event.target.value
        });
    };
    const sendData=()=>{
        props.parentCallBack(summary)
    }
    useEffect(()=>{
        sendData();
    })
    return(
        <div className={'pro-summary'}>
            <h3>Profile</h3>
            <p>Include 2-3 sentences about yourself.</p>
           <div className={'input-box'}>
               <textarea id={'profile'}
                      value={summary.profile}
                      onChange={handleChange}
                      style={{height:'150px'}}
               />
           </div>
        </div>
    )
}
export default Profile
