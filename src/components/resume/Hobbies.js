import React, {useEffect, useState} from 'react';

const Hobbies =(props)=>{
    const [hobby,setHobby]=useState({textHobby:''})

    const handleChange = event => {
        setHobby({
            ...hobby,
            [event.target.id]: event.target.value
        });
    };
    const sendData=()=>{
        props.parentCallBack(hobby)
    }
    useEffect(()=>{
        sendData();
    })
    return <div className={'pro-summary'}>
            <h3>Hobbies</h3>
            <p>What would you like?</p>
            <div className={'input-box'}>
               <textarea id={'textHobby'}
                         value={hobby.textHobby}
                         onChange={handleChange}
                         style={{height:'120px'}}
               />
            </div>
        </div>
}
export default Hobbies
