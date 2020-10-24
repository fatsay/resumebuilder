import React, {useEffect, useState} from 'react';
import Header from './Header';
import ProcessBar from './ProcessBar';
import '../../css/createResume.css'
import PersonalDetails from "./PersonalDetails";
import Profile from "./Profile";
import EmploymentHistory from "./EmploymentHistory";
import Education from "./Education";
import Links from "./Links";

const CreateResume =()=>{
    const [personalData,setData]=useState({})
    const [profile,setProfile]=useState({})
    const [employment,setEmployment]=useState([])
    const [education,setEducation]=useState([])
    const [links,setLinks]=useState([])

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
    const getLinks =(data)=>{
        setLinks(data)
    }
    useEffect(()=>{
        //console.log(personalData)
        //console.log(profile)
        //console.log(employment)
        //console.log(education)
        console.log(links)
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
                <Links parentCallBack={getLinks}/>
            </div>
            <div className={'container-right'}>
                Right Menu PDF view
            </div>
        </div>
    )
}
export default CreateResume
