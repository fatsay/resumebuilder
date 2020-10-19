import React from 'react';
import { useParams } from 'react-router-dom'
const Resume=()=> {
    let {linkId} = useParams()
    //useEffect api call get users docs resume and cover letter

    const resumes =()=>{
        return <p>Resumes List</p>
    }
    const coverLetters =()=>{
        return <p>Cover Letters List</p>
    }
        return (
            <div className={'container'}>
                {linkId ==='resume' && resumes()}
                {linkId ==='coverLetter' && coverLetters()}
            </div>
        );
}

export default Resume;
