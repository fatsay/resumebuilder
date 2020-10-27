import React, {useEffect, useState} from 'react';
import '../../css/createResume.css'

const Links =(props)=>{
    const [linkList,setLinkList]=useState([])
    const [links,setLinks]=useState({id:0,labelLink:'',link:''})

    const handleChange = event => {
        setLinks({
            ...links,
            [event.target.id]: event.target.value
        });
    }
    const saveLink =(e)=>{
        e.preventDefault()
        let id=links.id+1
        let item={...links}
        setLinkList(linkList.concat(item))

        setLinks({
            id:id,labelLink:'', link:''})
    }
    const deleteLink =(id)=>{
        const newList=linkList.filter((i)=>i.id!== id)
        setLinkList(newList)
    }
    const sendData=()=>{
        props.parentCallBack(linkList)
    }
    useEffect(()=>{
        sendData();
    })
    return <div className={'list-history'}>
        <h3>Websites and Social Links</h3>
        <p>You can add links websites you want hiring managers to see.
            (LInkedIn profile, or personal website)</p>
        <div className={''}>
            {linkList.map((r)=>{
                return <div className={'reusable-list'} key={r.id}>
                    <div style={{float:'left'}}>
                        <b>{r.labelLink}</b>
                        <p>{r.link}</p>
                    </div>
                    <div style={{float:'right'}}>
                        <i className="fas fa-trash" style={{color:'red',cursor:'pointer'}}
                           onClick={()=>deleteLink(r.id)}/>
                    </div>
                </div>
            })}
        </div>
        <div className={'reusable-form'} id={'addNewLink'}>
            <form onSubmit={saveLink}>
                <div className={'details-left'}>
                    <div className={'input-box'}>
                        <label htmlFor={'labelLink'}>Label</label>
                        <input type={'text'} id={'labelLink'}
                               value={links.labelLink}
                               onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={'details-right'}>
                    <div className={'input-box'}>
                        <label htmlFor={'link'}>Link</label>
                        <input type={'text'} id={'link'}
                               value={links.link}
                               onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={'input-box'} style={{float:'left'}}>
                    <button type={'submit'} className={'btn-button'} style={{float:'left'}}
                            onClick={()=>document.getElementById('addNewLink').style.display='none'}
                    >Save Link</button>
                </div>
            </form>
        </div>
        <p style={{color:'blue', cursor:'pointer',float:'left', width:'100%'}}
           onClick={()=>document.getElementById('addNewLink').style.display='block'}>
            <i className={'fas fa-plus'}
               style={{color:'blue', paddingRight:'15px'}}/>Add link</p>
    </div>
}

export default Links
