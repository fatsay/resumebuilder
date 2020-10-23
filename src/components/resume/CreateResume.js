import React, {useEffect, useState} from 'react';
import Header from './Header';
import ProcessBar from './ProcessBar';
import '../../css/createResume.css'
import PersonalDetails from "./PersonalDetails";
import Profile from "./Profile";
import EmploymentHistory from "./EmploymentHistory";
import Education from "./Education";

const CreateResume =()=>{
    const [personalData,setData]=useState({})
    const [profile,setProfile]=useState({})
    const [employment,setEmployment]=useState([])
    const [education,setEducation]=useState([])

    const getPersonalData =(data)=>{
        setData(data)
    }
    const getProfile =(data)=>{
        setProfile(data)
    }
    const getEmployment =(data)=>{
        setEmployment(data)
    }
    const getEducation =(data)=>{
        setEducation(data)
    }
    useEffect(()=>{
        //console.log(personalData)
        //console.log(profile)
        //console.log(employment)
        //console.log(education)
    })
    return (
        <div className={'container-createResume'}>
            <div className={'container-left'}>
                <Header header={personalData.nameFirst+' '+personalData.nameLast}/>
                <ProcessBar/>
                <PersonalDetails parentCallBack={getPersonalData}/>
                <Profile parentCallBack={getProfile}/>
                <EmploymentHistory parentCallBack={getEmployment}/>
                <Education parentCallBack={getEducation}/>
            </div>
            <div className={'container-right'}>
                Right Menu PDF view
            </div>
        </div>
    )
}
export default CreateResume
