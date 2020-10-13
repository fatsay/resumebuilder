import React from "react";

const Alert =(props)=> {
    const closeAlert=()=>{
        document.getElementById('myAlert').style.display='none'
    }
    return (
        <div className={'alert'} id={'myAlert'}>
            <span className={'alert-closeBtn'}
                  onClick={closeAlert}>
                &times;</span>
            <strong>{props.text}</strong>
        </div>
    )
}
export default Alert;
