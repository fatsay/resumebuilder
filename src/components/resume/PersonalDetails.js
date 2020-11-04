import React, {useContext, useEffect, useState} from 'react';
import '../../css/createResume.css'
import {UserContext} from "../../providers/UserProvider";

const PersonalDetails =(props)=>{

    const [personalData,setData]=useState({
        nameFirst:'', nameLast:'',photo:'',
        email:'', phone:'', country:'',
        city:'', address:'', postalCode:'',
        drivingLicense:'', nationality:'',
        placeOfBirth:'', dateOfBirth:'', jobTitle:''
    })
    const [addDetail,setDetail]=useState(false)

    const handleChange = event => {
        setData({
            ...personalData,
            [event.target.id]: event.target.value,
        });

    };
    const sendData=()=>{
        props.parentCallBack(personalData)
    }

    useEffect(()=>{
        sendData();
    })
    const hideDetails=()=>{
        document.getElementById('detail1').style.display='none'
        document.getElementById('detail2').style.display='none'
        setDetail(false)
    }
    const showDetails=()=>{
        document.getElementById('detail1').style.display='block'
        document.getElementById('detail2').style.display='block'
        setDetail(true)
    }
    const detailLink =()=>{
        if(!addDetail){
            return <p style={{color:'blue', cursor:'pointer'}} onClick={showDetails}>
                <i className={'fas fa-plus'}
                style={{color:'blue', paddingRight:'15px'}}/>Edit additional details</p>
        } else {
            return <p style={{color:'blue', cursor:'pointer'}} onClick={hideDetails}>
                <i className="fas fa-angle-up"
                   style={{color:'blue', paddingRight:'15px'}}/>Hide additional details</p>
        }
    }
    return <div className={'personal-details'}>
        <h3>Personal Details</h3>
        <div className={'details-left'}>
            <div className={'input-box'}>
                <label htmlFor={personalData.jobTitle}>Job Title</label>
                <input type={'text'} id={'jobTitle'}
                       value={personalData.jobTitle}
                       placeholder={'e.g. Engineer'}
                       onChange={handleChange}
                />
            </div>
            <div className={'input-box'}>
                <label htmlFor={personalData.nameFirst}>First Name</label>
                <input type={'text'} id={'nameFirst'}
                       value={personalData.nameFirst}
                       placeholder={''}
                       onChange={handleChange}
                />
            </div>
            <div className={'input-box'}>
                <label htmlFor={personalData.email}>Email</label>
                <input type={'email'} id={'email'}
                       value={personalData.email}
                       placeholder={''}
                       onChange={handleChange}
                />
            </div>
            <div className={'hideDetails'} id={'detail1'} style={{display:'none'}}>
                <div className={'input-box'}>
                    <label htmlFor={personalData.country}>Country</label>
                    <input type={'text'} id={'country'}
                           value={personalData.country}
                           placeholder={''}
                           onChange={handleChange}
                    />
                </div>
                <div className={'input-box'}>
                    <label htmlFor={personalData.address}>Address</label>
                    <input type={'text'} id={'address'}
                           value={personalData.address}
                           placeholder={''}
                           onChange={handleChange}
                    />
                </div>
                <div className={'input-box'}>
                    <label htmlFor={personalData.drivingLicense}>Driving License</label>
                    <input type={'text'} id={'drivingLicense'}
                           value={personalData.drivingLicense}
                           placeholder={''}
                           onChange={handleChange}
                    />
                </div>
                <div className={'input-box'}>
                    <label htmlFor={personalData.placeOfBirth}>Place of Birth</label>
                    <input type={'text'} id={'placeOfBirth'}
                           value={personalData.placeOfBirth}
                           placeholder={''}
                           onChange={handleChange}
                    />
                </div>
            </div>
            {detailLink()}
        </div>
        <div className={'details-right'}>
            <div className={'input-box'}>
                <label>Photo</label>
                    <input type={'file'} style={{float:"right"}}
                           onChange={(e)=>{setData({...personalData,
                               photo: URL.createObjectURL(e.target.files[0])
                           })}}
                    />
            </div>
            <div className={'input-box'}>
                <label htmlFor={personalData.nameLast}>Last Name</label>
                <input type={'text'} id={'nameLast'}
                       value={personalData.nameLast}
                       placeholder={''}
                       onChange={handleChange}
                />
            </div>
            <div className={'input-box'}>
                <label htmlFor={personalData.phone}>Phone Number</label>
                <input type={'number'} id={'phone'}
                       value={personalData.phone}
                       placeholder={''}
                       onChange={handleChange}
                />
            </div>
            <div className={'hideDetails'} id={'detail2'} style={{display:'none'}}>
                <div className={'input-box'}>
                    <label htmlFor={personalData.city}>City</label>
                    <input type={'text'} id={'city'}
                           value={personalData.city}
                           placeholder={''}
                           onChange={handleChange}
                    />
                </div>
                <div className={'input-box'}>
                    <label htmlFor={personalData.postalCode}>Postal Code</label>
                    <input type={'number'} id={'postalCode'}
                           value={personalData.postalCode}
                           placeholder={''}
                           onChange={handleChange}
                    />
                </div>
                <div className={'input-box'}>
                    <label htmlFor={personalData.nationality}>Nationality</label>
                    <input type={'text'} id={'nationality'}
                           value={personalData.nationality}
                           placeholder={''}
                           onChange={handleChange}

                    />
                </div>
                <div className={'input-box'}>
                    <label htmlFor={personalData.dateOfBirth}>Date of Birth</label>
                    <input type={'date'} id={'dateOfBirth'}
                           value={personalData.dateOfBirth}
                           onChange={handleChange}
                           style={{padding:'10px'}}
                    />
                </div>
            </div>
        </div>
    </div>
}
export default PersonalDetails
