import React, {useEffect, useState} from 'react';
import ReusableForm from './ReusableForm';
import '../../css/createResume.css'

const EmploymentHistory =(props)=>{
    //loop for emplist, display
    const [empList,setEmpList]=useState([])
    const [employment,setEmployment]=useState({
        titleJob:'', employer:'', dateStart:'',
        dateEnd:'',empCity:'',empDescription:''
    })
    const handleChange = event => {
        setEmployment({
            ...employment,
            [event.target.id]: event.target.value
        });
    };
    const saveEmployment =(e)=>{
        e.preventDefault()
        let item={...employment}
        setEmpList(empList.concat(item))
        //props.parentCallBack(empList)
        setEmployment(  {titleJob:'', employer:'', dateStart:'',
            dateEnd:'',empCity:'',empDescription:''})
    }
    const deleteEmployment =(dateStart)=>{
        const newList=empList.filter((i)=>i.dateStart!== dateStart)
        setEmpList(newList)
    }
    const sendData=()=>{
        props.parentCallBack(empList)
    }
    useEffect(()=>{
        sendData();
    })
    return <div className={'list-history'}>
        <h3>Employment History</h3>
        <p style={{textAlign:'left'}}>Include your relevant experience.</p>
        <div className={''}>
            {empList.map((r)=>{
                return <div className={'reusable-list'} key={r.dateStart}>
                    <div style={{float:'left'}}>
                        <b>{r.titleJob} ({r.employer})</b>
                        <p>{r.dateStart}-{r.dateEnd}</p>
                    </div>
                   <div style={{float:'right'}}>
                       <i className="fas fa-trash" style={{color:'red', cursor:'pointer'}}
                          onClick={()=>deleteEmployment(r.dateStart)}/>
                   </div>
                </div>
            })}
        </div>
        <ReusableForm handleSubmit={saveEmployment} handleChange={handleChange}
                      classId={'addNewEmp'}
                      buttonText={'Save Employment'}
                      value={[employment.titleJob,employment.dateStart,employment.empCity,
                      employment.employer,employment.dateEnd,employment.empDescription]}
                      labelTitle={['Job title','Start date','City','Employer','End date','Description']}
                      inputId={['titleJob','dateStart','empCity','employer','dateEnd','empDescription']}/>
            <p style={{color:'blue', cursor:'pointer',float:'left', width:'100%'}}
               onClick={()=>document.getElementById('addNewEmp').style.display='block'}>
                <i className={'fas fa-plus'}
                   style={{color:'blue', paddingRight:'15px'}}/>Add employment</p>
    </div>
}
export default EmploymentHistory
