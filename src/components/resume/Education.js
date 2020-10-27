import React, {useEffect, useState} from 'react';
import ReusableForm from "./ReusableForm";

const Education =(props)=>{
    const [eduList,setEduList]=useState([])
    const [education,setEducation]=useState({
        id:0,school:'', degree:'', eduDateStart:'',
        eduDateEnd:'',eduCity:'',eduDescription:''
    })

    const handleChange = event => {
        setEducation({
            ...education,
            [event.target.id]: event.target.value
        });
    }
    const saveEducation =(e)=>{
        e.preventDefault()
        let id=education.id+1
        let item={...education}
        setEduList(eduList.concat(item))
        //props.parentCallBack(empList)
        setEducation({
            id:id,school:'', degree:'', eduDateStart:'',
            eduDateEnd:'',eduCity:'',eduDescription:''
        })
    }
    const deleteEducation =(id)=>{
        const newList=eduList.filter((i)=>i.id!== id)
        setEduList(newList)
    }
    const sendData=()=>{
        props.parentCallBack(eduList)
    }
    useEffect(()=>{
        sendData();
    })
    return <div className={'list-history'}>
        <h3>Education</h3>
        <p style={{textAlign:'left'}}>Include your relevant educational achievements.</p>
        <div className={''}>
            {eduList.map((r)=>{
                return <div className={'reusable-list'} key={r.id}>
                    <div style={{float:'left'}}>
                        <b>{r.degree}  ({r.school})</b>
                        <p>{r.eduDateStart}-{r.eduDateEnd}</p>
                    </div>
                    <div style={{float:'right'}}>
                        <i className="fas fa-trash" style={{color:'red',cursor:'pointer'}}
                           onClick={()=>deleteEducation(r.id)}/>
                    </div>
                </div>
            })}
        </div>
        <ReusableForm handleSubmit={saveEducation} handleChange={handleChange}
                      classId={'addNewEdu'}
                      buttonText={'Save Education'}
                      value={[education.school,education.eduDateStart,education.eduCity,
                          education.degree,education.eduDateEnd,education.eduDescription]}
                      labelTitle={['School','Start date','City','Degree','End date','Description']}
                      inputId={['school','eduDateStart','eduCity','degree','eduDateEnd','eduDescription']}/>
        <p style={{color:'blue', cursor:'pointer',float:'left', width:'100%'}}
           onClick={()=>document.getElementById('addNewEdu').style.display='block'}>
            <i className={'fas fa-plus'}
               style={{color:'blue', paddingRight:'15px'}}/>Add education</p>
    </div>
}
export default Education
