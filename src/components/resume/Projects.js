import React, {useEffect, useState} from 'react';
import ReusableForm from "./ReusableForm";

const Projects =(props)=>{
    const [projectList,setProjectList]=useState([])
    const [project,setProject]=useState({
        id:0, projectName:'', projectType:'',projectDateStart:'',
        projectDateEnd:'',projectCity:'',projectDescription:''})

    const handleChange = event => {
        setProject({
            ...project,
            [event.target.id]: event.target.value
        });
    }
    const saveProject =(e)=>{
        e.preventDefault()
        let id=project.id+1
        let item={...project}
        setProjectList(projectList.concat(item))
        setProject({
            id:id,projectName:'', projectType:'', projectDateStart:'',
            projectDateEnd:'',projectCity:'',projectDescription:''
        })
    }
    const deleteProject =(id)=>{
        const newList=projectList.filter((i)=>i.id!== id)
        setProjectList(newList)
    }
    const sendData=()=>{
        props.parentCallBack(projectList)
    }
    useEffect(()=>{
        sendData();
    })
    return <div className={'list-history'}>
        <h3>Projects</h3>
        <p style={{textAlign:'left'}}>You can add projects you involved.</p>
        <div className={''}>
            {projectList.map((r)=>{
                return <div className={'reusable-list'} key={r.id}>
                    <div style={{float:'left'}}>
                        <b>{r.projectName}  ({r.projectType})</b>
                        <p>{r.projectDateStart}-{r.projectDateEnd}</p>
                    </div>
                    <div style={{float:'right'}}>
                        <i className="fas fa-trash" style={{color:'red',cursor:'pointer'}}
                           onClick={()=>deleteProject(r.id)}/>
                    </div>
                </div>
            })}
        </div>
        <ReusableForm handleSubmit={saveProject} handleChange={handleChange}
                      classId={'addNewProject'}
                      buttonText={'Save Project'}
                      value={[project.projectName,project.projectDateStart,project.projectCity,
                          project.projectType,project.projectDateEnd,project.projectDescription]}
                      labelTitle={['Project name','Start date','City','Project Platform','End date','Description']}
                      inputId={['projectName','projectDateStart','projectCity','projectType','projectDateEnd','projectDescription']}/>
        <p style={{color:'blue', cursor:'pointer',float:'left', width:'100%'}}
           onClick={()=>document.getElementById('addNewProject').style.display='block'}>
            <i className={'fas fa-plus'}
               style={{color:'blue', paddingRight:'15px'}}/>Add Project</p>
    </div>
}

export default Projects
