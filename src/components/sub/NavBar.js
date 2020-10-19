import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import { UserContext} from "../../providers/UserProvider";
import {logOut} from "../../services/Firebase";
import '../../css/navbar.css';
import Logo from '../../images/logo.png'

const NavBar =()=> {
    const user = useContext(UserContext)
    const logOptions=()=>{
        if (user){
            return <li className={'dropdown'}>
                <a href={{javascript:void(0)}} className="dropBtn">
                    <i className={'fas fa-user'}/>{user.displayName}</a>
            <div className="dropdown-content">
                <span className={'logout'} onClick={logOut}>Log out</span>
        </div></li>

        } else {
            return<li><NavLink activeClassName={'none'} to={'/login'}
                             style={{
                                 border: '1px solid lightskyblue',
                                 borderRadius: '5px'
                             }}
                >Log in</NavLink></li>
        }
    }
        return (
            <div className={'container-navbar'}>
                <i className={'fa fa-bars fa-2x'} id={'icon'} onClick={()=>{document.getElementById("myOverlay").style.width = "100%";
                }}/>
                <div className={'navbar-left'}>
                    <img src={Logo} alt={'logo'} style={{color:"cornflowerblue", float:'left'}}/>
                    <ul>
                        <li>
                            <NavLink to={'home'} activeClassName={'none'}>Resume builder</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={'navbar-right'}>
                    <ul>
                        <li>
                            <NavLink activeClassName={'active'} to={'/home'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={'active'} to={'/dashboard'}>Dashboard</NavLink>
                        </li>
                        {logOptions()}
                    </ul>
                </div>
                <div className={'overlay'} id={'myOverlay'}>
                    <button className={'closeBtn'} onClick={()=>{document.getElementById("myOverlay").style.width = "0%";}}> &times;</button>
                    <div className={'overlay-content'}>
                        <NavLink activeClassName={'none'} to={'/home'}>Home</NavLink>
                        <NavLink activeClassName={'none'} to={'/dashBoard'}>Dashboard</NavLink>
                    </div>
                </div>
            </div>
        );
}

export default NavBar;
