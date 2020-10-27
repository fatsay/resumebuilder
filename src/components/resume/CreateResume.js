import React, {useEffect, useState} from 'react';
import Header from './Header';
import '../../css/createResume.css'
import PersonalDetails from "./PersonalDetails";
import Profile from "./Profile";
import EmploymentHistory from "./EmploymentHistory";
import Education from "./Education";
import Links from "./Links";
import Skills from "./Skills";
import Languages from "./Languages";
import Hobbies from "./Hobbies";
import Projects from "./Projects";
import Conferences from "./Conferences";
import References from "./References";

const CreateResume =()=>{
    const [progress,setProgress]=useState(0)
    const [personalData,setData]=useState({})
    const [profile,setProfile]=useState({})
    const [employment,setEmployment]=useState([])
    const [education,setEducation]=useState([])
    const [links,setLinks]=useState([])
    const [skills,setSkills]=useState([])
    const [lang,setLang]=useState([])
    const [hobbies,setHobbies]=useState({})
    const [projects,setProjects]=useState([])
    const [conferences,setConferences]=useState([])
    const [references,setReferences]=useState([])

    let count=0
    const getPersonalData =(data)=>{
        setData(data)
        if (data.jobTitle.length>0 && data.nameFirst.length>0 && data.nameLast.length>0){
            count=count+10
            return setProgress(count)
        }
    }
    const getProfile =(data)=>{
        setProfile(data)
        if (data.profile.length>0){
            count=count+10
            return setProgress(count)
        }
    }
    const getEmployment =(data)=>{
        setEmployment(data)
        if (data.length>0){
            count=count+10
            return setProgress(count)
        }
    }
    const getEducation =(data)=>{
        setEducation(data)
        if (data.length>0){
            count=count+10
            return setProgress(count)
        }
    }
    const getLinks =(data)=>{
        setLinks(data)
        if (data.length>0){
            count=count+10
            return setProgress(count)
        }
    }
    const getSkills =(data)=>{
        setSkills(data)
        if (data.length>0){
            count=count+10
            return setProgress(count)
        }
    }
    const getLang =(data)=>{
        setLang(data)
        if (data.length>0){
            count=count+10
            return setProgress(count)
        }
    }
    const getHobbies =(data)=>{
        setHobbies(data)
        if (data.textHobby.length>0){
            count=count+10
            return setProgress(count)
        }
    }
    const getProjects =(data)=>{
        setProjects(data)
        if (data.length>0){
            count=count+10
            return setProgress(count)
        }
    }
    const getConferences =(data)=>{
        setConferences(data)
        if (data.length>0){
            count=count+10
            return setProgress(count)
        }
    }
    const getReferences =(data)=>{
        setReferences(data)
    }
    return (
        <div className={'container-createResume'}>
            <div className={'container-left'}>
                <Header header={personalData.nameFirst+' '+personalData.nameLast}/>
                <label htmlFor="progress">{progress+'% '} Profile completeness</label>
                <p><progress id="progress" value={progress} max="100"
                style={{width:'100%'}}
                /></p>
                <PersonalDetails parentCallBack={getPersonalData}/>
                <Profile parentCallBack={getProfile}/>
                <EmploymentHistory parentCallBack={getEmployment}/>
                <Education parentCallBack={getEducation}/>
                <Links parentCallBack={getLinks}/>
                <Skills parentCallBack={getSkills}/>
                <Languages parentCallBack={getLang}/>
                <Hobbies parentCallBack={getHobbies}/>
                <Projects parentCallBack={getProjects}/>
                <Conferences parentCallBack={getConferences}/>
                <References parentCallBack={getReferences}/>
            </div>
            <div className={'container-right'}>
                Right Menu PDF view
                <div className={'container-right'}>

                </div>

            </div>
        </div>
    )
}
export default CreateResume
