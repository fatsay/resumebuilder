import React, {useEffect, useState} from 'react';
import ReusableForm from "./ReusableForm";

const Conferences =(props)=>{
    const [confList,setConfList]=useState([])
    const [conf,setConf]=useState({
        id:0, confName:'', confContent:'',confDateStart:'',
        confDateEnd:'',confCity:'',confDescription:''
    })
    const handleChange = event => {
        setConf({
            ...conf,
            [event.target.id]: event.target.value
        });
    }
    const saveConference =(e)=>{
        e.preventDefault()
        let id=conf.id+1
        let item={...conf}
        setConfList(confList.concat(item))
        setConf({
            id:id, confName:'', confContent:'', confDateStart:'',
            confDateEnd:'',confCity:'',confDescription:''
        })
    }
    const deleteConference =(id)=>{
        const newList=confList.filter((i)=>i.id!== id)
        setConfList(newList)
    }
    const sendData=()=>{
        props.parentCallBack(confList)
    }
    useEffect(()=>{
        sendData();
    })
    return <div className={'list-history'}>
        <h3>Conferences</h3>
        <p style={{textAlign:'left'}}>You can add conferences you attended.</p>
        <div className={''}>
            {confList.map((r)=>{
                return <div className={'reusable-list'} key={r.id}>
                    <div style={{float:'left'}}>
                        <b>{r.confName}  ({r.confContent})</b>
                        <p>{r.confDateStart}-{r.confDateEnd}</p>
                    </div>
                    <div style={{float:'right'}}>
                        <i className="fas fa-trash" style={{color:'red',cursor:'pointer'}}
                           onClick={()=>deleteConference(r.id)}/>
                    </div>
                </div>
            })}
        </div>
        <ReusableForm handleSubmit={saveConference} handleChange={handleChange}
                      classId={'addNewConf'}
                      buttonText={'Save Conference'}
                      value={[conf.confName,conf.confDateStart,conf.confCity,
                          conf.confContent,conf.confDateEnd,conf.confDescription]}
                      labelTitle={['Conference name','Start date','City','Conference content','End date','Description']}
                      inputId={['confName','confDateStart','confCity','confContent','confDateEnd','confDescription']}/>
        <p style={{color:'blue', cursor:'pointer',float:'left', width:'100%'}}
           onClick={()=>document.getElementById('addNewConf').style.display='block'}>
            <i className={'fas fa-plus'}
               style={{color:'blue', paddingRight:'15px'}}/>Add Project</p>
    </div>
}
export default Conferences
