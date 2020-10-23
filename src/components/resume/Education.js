import React, {useEffect, useState} from 'react';
import ReusableForm from "./ReusableForm";

const Education =(props)=>{
    const [eduList,setEduList]=useState([])
    const [education,setEducation]=useState({
        school:'', degree:'', dateStart:'',
        dateEnd:'',eduCity:'',eduDescription:''
    })

    const handleChange = event => {
        setEducation({
            ...education,
            [event.target.id]: event.target.value
        });
    }
    const saveEducation =(e)=>{
        e.preventDefault()
        let item={...education}
        setEduList(eduList.concat(item))
        //props.parentCallBack(empList)
        setEducation({
            school:'', degree:'', dateStart:'',
            dateEnd:'',eduCity:'',eduDescription:''
        })
    }
    const deleteEducation =(dateStart)=>{
        const newList=eduList.filter((i)=>i.dateStart!== dateStart)
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
                return <div className={'reusable-list'} key={r.dateStart}>
                    <div style={{float:'left'}}>
                        <b>{r.degree}  ({r.school})</b>
                        <p>{r.dateStart}-{r.dateEnd}</p>
                    </div>
                    <div style={{float:'right'}}>
                        <i className="fas fa-trash" style={{color:'red',cursor:'pointer'}}
                           onClick={()=>deleteEducation(r.dateStart)}/>
                    </div>
                </div>
            })}
        </div>
        <ReusableForm handleSubmit={saveEducation} handleChange={handleChange}
                      classId={'addNewEdu'}
                      buttonText={'Save Education'}
                      value={[education.school,education.dateStart,education.eduCity,
                          education.degree,education.dateEnd,education.eduDescription]}
                      labelTitle={['School','Start date','City','Degree','End date','Description']}
                      inputId={['school','dateStart','eduCity','degree','dateEnd','eduDescription']}/>
        <p style={{color:'blue', cursor:'pointer',float:'left', width:'100%'}}
           onClick={()=>document.getElementById('addNewEdu').style.display='block'}>
            <i className={'fas fa-plus'}
               style={{color:'blue', paddingRight:'15px'}}/>Add education</p>
    </div>

}
export default Education
