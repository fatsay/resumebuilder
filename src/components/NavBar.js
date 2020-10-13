import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import '../css/navbar.css';

class NavBar extends Component {
    openNav=()=> {
        document.getElementById("myOverlay").style.width = "100%";
    }
    closeNav=(e)=> {
        e.preventDefault();
        document.getElementById("myOverlay").style.width = "0%";
    }
    render() {
        return (
            <div className={'container-navbar'}>
                <i className={'fa fa-bars fa-2x'} id={'icon'} onClick={this.openNav}/>
                <div className={'navbar-left'}>
                    <i className="fas fa-edit fa-2x" id={'logo'} style={{float:'left'}}/>
                    <ul>
                        <li><NavLink activeClassName={'active'} to={'/home'}>Home</NavLink></li>
                        <li><NavLink activeClassName={'active'} to={'/resume'}>Resume writing</NavLink></li>
                        <li><NavLink activeClassName={'active'} to={'/coverLetter'}>Cover letter</NavLink></li>
                    </ul>
                </div>
                <div className={'navbar-right'}>
                    <ul>
                        <li><NavLink activeClassName={'active'} to={'/login'}>Log in</NavLink></li>
                        <li><NavLink activeClassName={'active'} to={'/logout'}>Log out</NavLink></li>

                    </ul>
                </div>
                <div className={'overlay'} id={'myOverlay'}>
                    <a href={{javascript:void(0)}} className='closeBtn' onClick={this.closeNav}>
                        &times;</a>
                    <div className={'overlay-content'}>
                        <NavLink to={'/home'}>Home</NavLink>
                        <NavLink to={'/resume'}>Resume writing</NavLink>
                        <NavLink to={'/coverLetter'}>Cover letter</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
