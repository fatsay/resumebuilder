import React, {useState} from 'react';
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
import html2canvas from "html2canvas";
import jsPDF from 'jspdf'
import * as axios from "axios";

const CreateResume =()=>{
    const [progress,setProgress]=useState(0)
    const [personalData,setData]=useState({})
    const [profile,setProfile]=useState('')
    const [employment,setEmployment]=useState([])
    const [education,setEducation]=useState([])
    const [links,setLinks]=useState([])
    const [skills,setSkills]=useState([])
    const [lang,setLang]=useState([])
    const [hobbies,setHobbies]=useState({})
    const [projects,setProjects]=useState([])
    const [conferences,setConferences]=useState([])
    const [references,setReferences]=useState([])
    const skillLevel=['Novice','Beginner','Skillful','Experienced','Expert']
    const [showLoader, setLoader] = useState(false);

    let count=0
    const getPersonalData =(data)=>{
        setData(data)
        if (data.jobTitle.length>0 && data.nameFirst.length>0 && data.nameLast.length>0){
            count=count+10
            return setProgress(count)
        }
    }
    const getProfile =(data)=>{
        setProfile(data.profile)
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
    const convertToPdf=()=> {
        window.scrollTo(0, 0)
        setTimeout(() => {
            setTimeout(() => {
                setLoader(true);
            }, 100);
            const divToPrint = document.querySelector('#capture')
            html2canvas(divToPrint, {useCORS: true, scale: 2}).then(canvas => {
                const imgData = canvas.toDataURL('image/png')
                const imgWidth = 210
                const pageHeight = 290
                const imgHeight = (canvas.height * imgWidth) / canvas.width
                let heightLeft = imgHeight
                const doc = new jsPDF('p', 'mm', 'a4')
                let position = 0
                doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
                heightLeft -= pageHeight
                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    doc.addPage()
                    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight + 25)
                    heightLeft -= pageHeight
                }
                doc.save('download.pdf')
                setLoader(false)
            }).then(() => {
                const userData = {
                    personalData: personalData,
                    profile: profile,
                    employment: employment,
                    education: education,
                    links: links,
                    skills: skills,
                    lang: lang,
                    hobbies: hobbies,
                    projects: projects,
                    conferences: conferences,
                    references: references
                }
                axios.post('http://localhost:3000/users?',
                    JSON.stringify(userData),
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': 'POST'
                        }
                    }).then(res => {
                    console.log(res.message)
                }).catch(err => {
                    console.log(err)
                })
            })
        }, 1000)
    }
    return (
        <div className={'container-createResume'}>
            <div className={'container-left'}>
                <Header header={personalData.nameFirst+' '+personalData.nameLast}/>
                <p style={{textAlign:'center'}}>English</p>
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
            <div className={'container-right'} id={'capture'}>
                <div className={'display-top'}>
                    <img src={personalData.photo} alt={'img'}
                         style={{width:'80px' ,display:'block', margin:'auto'}}
                    />
                    <Header header={personalData.nameFirst+' '+personalData.nameLast}/>
                    <p style={{textAlign:'center',textTransform:'uppercase'}}>
                        {personalData.jobTitle}&nbsp;&nbsp;&nbsp;
                        <i className="fas fa-map-marker-alt"/>&nbsp;{personalData.city},
                        {personalData.postalCode},{personalData.country}&nbsp;&nbsp;&nbsp;
                        <i className="fas fa-phone"/>&nbsp;{personalData.phone}
                    </p>
                </div>
                <div className={'display-left'}>
                    <div style={{textAlign:'center'}}>
                        <h3>DETAILS</h3>
                        <p>{personalData.address},&nbsp;{personalData.city},&nbsp;{personalData.postalCode}</p>
                        <p>{personalData.country}</p>
                        <p>{personalData.phone}</p>
                        <p style={{textTransform:'none'}}>{personalData.email}</p>
                        <label>Date/Place of birth</label>
                        <p>{personalData.dateOfBirth}</p>
                        <p>{personalData.placeOfBirth}</p>
                        <label>Nationality</label>
                        <p>{personalData.nationality}</p>
                        <label>Driving license</label>
                        <p>{personalData.drivingLicense}</p>
                    </div>
                    { links.length>0 &&
                    <div style={{textAlign:'center'}}>
                        <h3>LINKS</h3>
                        {links.map((r)=>{
                            return <div style={{textTransform:'none'}} key={r.id}>
                                <label style={{textTransform:'capitalize'}}>{r.labelLink}</label>
                                <p style={{cursor:'pointer'}}
                                   onClick={(event) => {event.preventDefault(); window.open(r.link);}}>{r.link}</p>
                            </div>
                        })}
                    </div>
                    }
                    { skills.length>0 &&
                    <div style={{textAlign:'center'}}>
                        <h3>SKILLS</h3>
                        {skills.map((r)=>{
                            return <div key={r.id}>
                                <p><b>{r.labelSkill}:</b>&nbsp;
                                    <i>{skillLevel[r.level]}</i></p>
                            </div>
                        })}
                    </div>
                    }
                    { lang.length>0 &&
                    <div style={{textAlign:'center'}}>
                        <h3>LANGUAGES</h3>
                        {lang.map((r)=>{
                            return <div key={r.id}>
                                <p><b>{r.labelLang}:</b>&nbsp;
                                    <i>{r.langLevel}</i></p>
                            </div>
                        })}
                    </div>
                    }
                    { hobbies.length>0 &&
                    <div style={{textAlign:'center'}}>
                        <h3>HOBBIES</h3>
                        <p>{hobbies.textHobby}</p>
                    </div>
                    }
                </div>
                <div className={'display-right'}>
                    { profile.length>0 &&
                        <div>
                            <i className="fas fa-user"/><h3>PROFILE</h3>
                            {profile.split('\n').map((r)=>{
                                return <p key={r} style={{textAlign:'justify'}}>{r}<br/></p>
                            })}
                        </div>
                    }
                    { employment.length>0 &&
                    <div style={{textAlign:'left'}}>
                        <i className="fas fa-briefcase"/><h3>EMPLOYMENT HISTORY</h3>
                        {employment.map((r)=>{
                            return <div key={r.id}>
                                <p><b>{r.titleJob}&nbsp;{r.employer},&nbsp;{r.empCity}</b></p>
                                <label>{r.empDateStart}&nbsp;-&nbsp;{r.empDateEnd}</label>
                                {r.empDescription.split('\n').map((res=>{
                                    return <p key={res}>{res}<br/></p>
                                }))}
                            </div>
                        })}
                    </div>
                    }
                    { education.length>0 &&
                    <div style={{textAlign:'left'}}>
                        <i className="fas fa-graduation-cap"/><h3>EDUCATION</h3>
                        {education.map((r)=>{
                            return <div key={r.id}>
                                <p><b>{r.degree}&nbsp;at&nbsp;{r.school},&nbsp;{r.eduCity}</b></p>
                                <label>{r.eduDateStart}&nbsp;-&nbsp;{r.eduDateEnd}</label>
                                {r.eduDescription.split('\n').map((res=>{
                                    return <p key={res}>{res}<br/></p>
                                }))}
                            </div>
                        })}
                    </div>
                    }
                    { projects.length>0 &&
                    <div style={{textAlign:'left'}}>
                        <i className="fas fa-graduation-cap"/><h3>PROJECTS</h3>
                        {projects.map((r)=>{
                            return <div key={r.id}>
                                <p><b>{r.projectName},&nbsp;{r.projectType},&nbsp;{r.projectCity}</b></p>
                                <label>{r.projectDateStart}&nbsp;-&nbsp;{r.projectDateEnd}</label>
                                {r.projectDescription.split('\n').map((res=>{
                                    return <p key={res}>{res}<br/></p>
                                }))}
                            </div>
                        })}
                    </div>
                    }
                    { conferences.length>0 &&
                    <div style={{textAlign:'left'}}>
                        <i className="fas fa-hotel"/><h3>CONFERENCES</h3>
                        {conferences.map((r)=>{
                            return <div key={r.id}>
                                <p><b>{r.confName},&nbsp;{r.confContent},&nbsp;{r.confCity}</b></p>
                                <label>{r.confDateStart}&nbsp;-&nbsp;{r.confDateEnd}</label>
                                {r.confDescription.split('\n').map((res=>{
                                    return <p key={res}>{res}<br/></p>
                                }))}
                            </div>
                        })}
                    </div>   }
                    { references.length>0 &&
                        <div style={{textAlign:'left'}}>
                            <i className="fas fa-hotel"/><h3>REFERENCES</h3>
                            {references.map((r)=>{
                                return <div key={r.id}>
                                    <p><b>{r.labelRef}&nbsp;from &nbsp;{r.referenceCompany}</b></p>
                                    <label>{r.referencePhone}&nbsp;-&nbsp;{r.referenceEmail}</label>
                                </div>
                            })}
                        </div>
                    }
                </div>
            </div>
            <button className={'btn-button'} style={{float:'right',width:'200px',marginRight:'90px',marginTop:'20px'}}
                    onClick={convertToPdf}>Convert</button>
        </div>
    )
}
export default CreateResume
