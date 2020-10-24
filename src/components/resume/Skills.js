import React, {useEffect, useState} from 'react';

const Skills =(props)=>{
    const [skillList,setSkillList]=useState([])
    const [skills,setSkills]=useState({id:0,labelSkill:'',level:'0'})

    const handleChange = event => {
        setSkills({
            ...skills,
            [event.target.id]: event.target.value
        });
    }

    const saveSkill =(e)=>{
        e.preventDefault()
        let id=skills.id+1
        let item={...skills}
        setSkillList(skillList.concat(item))
        setSkills({
            id:id,labelSkill:'', level:'0'})
    }
    const deleteSkill =(id)=>{
        const newList=skillList.filter((i)=>i.id!== id)
        setSkillList(newList)
    }
    const sendData=()=>{
        props.parentCallBack(skillList)
    }
    useEffect(()=>{
        sendData();
    })

    return <div className={'list-history'}>
        <h3>Skills</h3>
        <p style={{textAlign:'left'}}>You can add skills with their levels.
            </p>
        <div className={''}>
            {skillList.map((r)=>{
                return <div className={'reusable-list'} key={r.id}>
                    <div style={{float:'left'}}>
                        <b>{r.labelSkill}</b>
                        {r.level==='0' &&<p>Novice</p>}
                        {r.level==='1' &&<p>Beginner</p>}
                        {r.level==='2' &&<p>Skillful</p>}
                        {r.level==='3' &&<p>Experienced</p>}
                        {r.level==='4' &&<p>Expert</p>}
                    </div>
                    <div style={{float:'right'}}>
                        <i className="fas fa-trash" style={{color:'red',cursor:'pointer'}}
                           onClick={()=>deleteSkill(r.id)}/>
                    </div>
                </div>
            })}
        </div>
        <div className={'reusable-form'} id={'addNewSkill'} style={{height:'120px'}}>
            <form onSubmit={saveSkill}>
                <div className={'details-left'}>
                    <div className={'input-box'}>
                        <label htmlFor={'labelSkill'}>Skill</label>
                        <input type={'text'} id={'labelSkill'}
                               value={skills.labelSkill}
                               onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={'details-right'}>
                    <div className={'input-box'} style={{width:'220px'}}>
                        <label htmlFor={'level'}>Level
                            {skills.level==='0' &&<strong>-Novice</strong>}
                            {skills.level==='1' &&<strong>-Beginner</strong>}
                            {skills.level==='2' &&<strong>-Skillful</strong>}
                            {skills.level==='3' &&<strong>-Experienced</strong>}
                            {skills.level==='4' &&<strong>-Expert</strong>}</label>
                        <input type={'range'} id={'level'} min={'0'} max={'4'}
                               value={skills.level}
                               onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={'input-box'} style={{float:'left', width:'100%'}}>
                    <button type={'submit'} className={'btn-button'} style={{float:'left'}}
                            onClick={()=>document.getElementById('addNewSkill').style.display='none'}
                    >Save Skill</button>
                </div>
            </form>
        </div>
        <p style={{color:'blue', cursor:'pointer',float:'left', width:'100%'}}
           onClick={()=>document.getElementById('addNewSkill').style.display='block'}>
            <i className={'fas fa-plus'}
               style={{color:'blue', paddingRight:'15px'}}/>Add skill</p>
    </div>
}
export default Skills
