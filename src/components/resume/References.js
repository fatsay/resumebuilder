import React, {useEffect, useState} from 'react';
import '../../css/createResume.css'

const References =(props)=>{
    const [refList,setRefList]=useState([])
    const [ref,setRef]=useState({
        id:0,labelRef:'', referenceCompany:'',referencePhone:'',referenceEmail:''
    })

    const handleChange = event => {
        setRef({
            ...ref,
            [event.target.id]: event.target.value
        });
    }
    const saveRef =(e)=>{
        e.preventDefault()
        let id=ref.id+1
        let item={...ref}
        setRefList(refList.concat(item))

        setRef({
            id:id,labelRef:'', referenceCompany:'', referencePhone: '',referenceEmail: ''})
    }
    const deleteRef =(id)=>{
        const newList=refList.filter((i)=>i.id!== id)
        setRefList(newList)
    }
    const sendData=()=>{
        props.parentCallBack(refList)
    }
    useEffect(()=>{
        sendData();
    })
    return (
        <div className={'list-history'}>
        <h3>References</h3>
        <p>You can add your references you want hiring managers to see.</p>
        <div className={''}>
            {refList.map((r)=>{
                return <div className={'reusable-list'} key={r.id}>
                    <div style={{float:'left'}}>
                        <b>{r.labelRef}</b>
                        <p>{r.referenceCompany}</p>
                    </div>
                    <div style={{float:'right'}}>
                        <i className="fas fa-trash" style={{color:'red',cursor:'pointer'}}
                           onClick={()=>deleteRef(r.id)}/>
                    </div>
                </div>
            })}
        </div>
        <div className={'reusable-form'} id={'addNewRef'}>
            <form onSubmit={saveRef}>
                <div className={'details-left'}>
                    <div className={'input-box'}>
                        <label htmlFor={'labelRef'}>Referent's name</label>
                        <input type={'text'} id={'labelRef'}
                               value={ref.labelRef}
                               onChange={handleChange}
                        />
                    </div>
                    <div className={'input-box'}>
                        <label htmlFor={'referencePhone'}>Phone</label>
                        <input type={'text'} id={'referencePhone'}
                               value={ref.referencePhone}
                               onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={'details-right'}>
                    <div className={'input-box'}>
                        <label htmlFor={'referenceCompany'}>Company</label>
                        <input type={'text'} id={'referenceCompany'}
                               value={ref.referenceCompany}
                               onChange={handleChange}
                        />
                    </div>
                    <div className={'input-box'}>
                        <label htmlFor={'refEmail'}>Email</label>
                        <input type={'email'} id={'referenceEmail'} name={'email'}
                               value={ref.referenceEmail}
                               onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={'input-box'} style={{float:'left'}}>
                    <button type={'submit'} className={'btn-button'} style={{float:'left'}}
                            onClick={()=>document.getElementById('addNewRef').style.display='none'}
                    >Save Reference</button>
                </div>
            </form>
        </div>
        <p style={{color:'blue', cursor:'pointer',float:'left', width:'100%'}}
           onClick={()=>document.getElementById('addNewRef').style.display='block'}>
            <i className={'fas fa-plus'}
               style={{color:'blue', paddingRight:'15px'}}/>Add reference</p>
    </div>)
}
export default References
