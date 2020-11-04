import React, {useContext, useEffect} from 'react';
import NavBar from '../sub/NavBar';
import { NavLink,useRouteMatch,Switch,Route,useHistory} from 'react-router-dom';
import '../../css/dashboard.css'
import '../../css/navbar.css'
import Resume from './Resume';
import {UserContext} from "../../providers/UserProvider";

const Dashboard =()=> {
    const user = useContext(UserContext)
    let { path, url } = useRouteMatch()
    let history = useHistory()

    //Do this in App component with protected page
        return (
            <div className={'container'}>
                <NavBar/>
                <div className={'container-dashboard'}>
                    <div style={{padding:'40px 0 10px 0'}}>
                        <h1>Dashboard</h1>
                    </div>
                    <div className={'navbar-dashboard'}>
                        <NavLink to={`${url}/resume`}>Resumes</NavLink>
                        <NavLink to={`${url}/coverLetter`}>Cover Letters</NavLink>
                        <button className={'btn-button'} onClick={()=>history.push(`/createResume`)}
                        style={{padding:'10px',float:'right'}}
                        ><i className={'fas fa-plus'}
                            style={{color:'orangered'}}/>Create New</button>
                    </div>
                    <div>
                        <Switch>
                            <Route path={`${path}/:linkId`}>
                                <Resume/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        );
}

export default Dashboard;
