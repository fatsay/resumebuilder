import React from 'react';
import '../../css/createResume.css'

const ReusableForm =(props)=>{

    return  <div className={'reusable-form'} id={props.classId}>
        <form onSubmit={props.handleSubmit}>
            <div className={'details-left'}>
                <div className={'input-box'}>
                    <label htmlFor={props.value[0]}>{props.labelTitle[0]}</label>
                    <input type={'text'} id={props.inputId[0]}
                           value={props.value[0]}
                           onChange={props.handleChange}
                    />
                </div>
                <div className={'input-box'}>
                    <label htmlFor={props.value[1]}>{props.labelTitle[1]}</label>
                    <input type={'date'} id={props.inputId[1]}
                           value={props.value[1]}
                           onChange={props.handleChange}
                    />
                </div>
                <div className={'input-box'}>
                    <label htmlFor={props.value[2]}>{props.labelTitle[2]}</label>
                    <input type={'text'} id={props.inputId[2]}
                           value={props.value[2]}
                           onChange={props.handleChange}
                    />
                </div>
            </div>
            <div className={'details-right'}>
                <div className={'input-box'}>
                    <label htmlFor={props.value[3]}>{props.labelTitle[3]}</label>
                    <input type={'text'} id={props.inputId[3]}
                           value={props.value[3]}
                           onChange={props.handleChange}
                    />
                </div>
                <div className={'input-box'}>
                    <label htmlFor={props.value[4]}>{props.labelTitle[4]}</label>
                    <input type={'date'} id={props.inputId[4]}
                           value={props.value[4]}
                           onChange={props.handleChange}
                    />
                </div>
            </div>
            <div className={'input-box'} style={{float:'left', width:'100%'}}>
                <label htmlFor={props.value[5]}>{props.labelTitle[5]}</label>
                <textarea id={props.inputId[5]}
                          value={props.value[5]}
                          onChange={props.handleChange}
                          style={{height:'100px'}}
                />
            </div>
            <button type={'submit'} className={'btn-button'} style={{float:'left'}}
                    onClick={()=>document.getElementById(props.classId).style.display='none'}
            >{props.buttonText}</button>
        </form>
    </div>
}
export default ReusableForm
