import React, {useContext} from 'react';
import { useParams } from 'react-router-dom'
import {UserContext} from "../../providers/UserProvider";
import {useHistory} from 'react-router-dom';

const Resume=()=> {
    let {linkId} = useParams()
    const user = useContext(UserContext)
    let history = useHistory()

    const resumes =()=>{
        if (Object.keys(user.userData).length===0){
            return <p>Empty list</p>
        }else {
            return <div>
                <i className="fas fa-id-card fa-6x"
                   style={{color:'orangered',cursor:'pointer'}}
                   onClick={()=>history.push('/createResume')}/>
                <p>{user.userData.personalDetails.nameFirst}&nbsp;{user.userData.personalDetails.nameLast}.CV</p>
            </div>
        }
    }
    const coverLetters =()=>{
        return <p>Cover Letters List</p>
    }
        return (
            <div className={'container'}>
                {linkId ==='resume' && resumes()}
                {linkId ==='coverLetter' && coverLetters()}
            </div>
        );
}

export default Resume;
