import React, {useEffect, useState} from 'react';
import ReusableForm from './ReusableForm';
import '../../css/createResume.css'

const EmploymentHistory =(props)=>{
    //loop for emplist, display
    const [empList,setEmpList]=useState([])
    const [employment,setEmployment]=useState({
        id:'',titleJob:'', employer:'', empDateStart:'',
        empDateEnd:'',empCity:'',empDescription:''
    })
    const handleChange = event => {
        setEmployment({
            ...employment,
            [event.target.id]: event.target.value
        });
    };
    const saveEmployment =(e)=>{
        e.preventDefault()
        let id=employment.id+1
        let item={...employment}
        setEmpList(empList.concat(item))
        //props.parentCallBack(empList)
        setEmployment(  {id:id,titleJob:'', employer:'', empDateStart:'',
            empDateEnd:'',empCity:'',empDescription:''})
    }
    const deleteEmployment =(id)=>{
        const newList=empList.filter((i)=>i.id!== id)
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
                return <div className={'reusable-list'} key={r.id}>
                    <div style={{float:'left'}}>
                        <b>{r.titleJob} ({r.employer})</b>
                        <p>{r.empDateStart}-{r.empDateEnd}</p>
                    </div>
                   <div style={{float:'right'}}>
                       <i className="fas fa-trash" style={{color:'red', cursor:'pointer'}}
                          onClick={()=>deleteEmployment(r.id)}/>
                   </div>
                </div>
            })}
        </div>
        <ReusableForm handleSubmit={saveEmployment} handleChange={handleChange}
                      classId={'addNewEmp'}
                      buttonText={'Save Employment'}
                      value={[employment.titleJob,employment.empDateStart,employment.empCity,
                      employment.employer,employment.empDateEnd,employment.empDescription]}
                      labelTitle={['Job title','Start date','City','Employer','End date','Description']}
                      inputId={['titleJob','empDateStart','empCity','employer','empDateEnd','empDescription']}/>
            <p style={{color:'blue', cursor:'pointer',float:'left', width:'100%'}}
               onClick={()=>document.getElementById('addNewEmp').style.display='block'}>
                <i className={'fas fa-plus'}
                   style={{color:'blue', paddingRight:'15px'}}/>Add employment</p>
    </div>
}
export default EmploymentHistory
