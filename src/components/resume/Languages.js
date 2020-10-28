import React, {useEffect, useState} from 'react';

const Languages =(props)=>{
    const [langList,setLangLIst]=useState([])
    const [lang,setLang]=useState({id:0,labelLang:'',langLevel:''})

    const handleChange = event => {
        setLang({
            ...lang,
            [event.target.id]: event.target.value
        });
    }
    const saveLang =(e)=>{
        e.preventDefault()
        let id=lang.id+1
        let item={...lang}
        setLangLIst(langList.concat(item))
        setLang({
            id:id,labelLang:'', langLevel:''})
    }
    const deleteLang =(id)=>{
        const newList=langList.filter((i)=>i.id!== id)
        setLangLIst(newList)
    }
    const sendData=()=>{
        props.parentCallBack(langList)
    }
    useEffect(()=>{
        sendData();
    })
    return <div className={'list-history'}>
        <h3>Languages</h3>
        <div className={''}>
            {langList.map((r)=>{
                return <div className={'reusable-list'} key={r.id}>
                    <div style={{float:'left'}}>
                        <b>{r.labelLang}</b>
                        <p>{r.langLevel}</p>
                    </div>
                    <div style={{float:'right'}}>
                        <i className="fas fa-trash" style={{color:'red',cursor:'pointer'}}
                           onClick={()=>deleteLang(r.id)}/>
                    </div>
                </div>
            })}
            </div>
            <div className={'reusable-form'} id={'addNewLang'} style={{height:'120px'}}>
                <form onSubmit={saveLang}>
                    <div className={'details-left'}>
                        <div className={'input-box'}>
                            <label htmlFor={'labelLang'}>Language</label>
                            <input type={'text'} id={'labelLang'}
                                   value={lang.labelLang}
                                   onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={'details-right'}>
                        <div className={'input-box'} style={{padding:'1px'}}>
                            <label htmlFor={'langLevel'}>Level</label>
                            <select id={'langLevel'} value={lang.langLevel} onChange={handleChange}>
                                <option value={'Native speaker'}>Native speaker</option>
                                <option value={'Highly proficient'}>Highly proficient</option>
                                <option value={'Very good command'}>Very good command</option>
                                <option value={'Good working knowledge'}>Good working knowledge</option>
                                <option value={'Working knowledge'}>Working knowledge</option>
                            </select>

                        </div>
                    </div>
                    <div className={'input-box'} style={{float:'left', width:'100%'}}>
                        <button type={'submit'} className={'btn-button'} style={{float:'left'}}
                                onClick={()=>document.getElementById('addNewLang').style.display='none'}
                        >Save Language</button>
                    </div>
                </form>
            </div>
        <p style={{color:'blue', cursor:'pointer',float:'left', width:'100%'}}
           onClick={()=>document.getElementById('addNewLang').style.display='block'}>
            <i className={'fas fa-plus'}
               style={{color:'blue', paddingRight:'15px'}}/>Add language</p>
    </div>
}
export default Languages
