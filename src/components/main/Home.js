import React, {useContext} from 'react';
import NavBar from "../sub/NavBar";
import {useHistory} from 'react-router-dom';
import {UserContext} from "../../providers/UserProvider";


const Home =()=> {
    let history = useHistory()
    const user = useContext(UserContext)
    const redUser=()=>{
        if (!user){
            history.push('/login')
        } else {
            history.push('/createResume')
        }
    }
    return (
            <div className={'container'}>
                <NavBar/>
                <div style={{textAlign:'center',margin:'auto', width:'600px'}}>
                    <h1 style={{marginTop:'200px',lineHeight:'40px'}}>Only 2% of resumes make it past the first round. Be in the top 2%</h1>
                    <h3 style={{lineHeight:'25px'}}>Use professional field-tested resume templates that follow the exact ‘resume rules’ employers look for. Easy to use and done within minutes - try now for free!</h3>
                    <button className={'btn-button'} style={{marginTop:'100px',fontSize:'20px'}}
                            onClick={redUser}>Create resume</button>
                </div>
            </div>
        );
}

export default Home;
