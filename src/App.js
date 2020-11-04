import React, {useContext} from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Login from './components/main/Login';
import Home from './components/main/Home';
import UserProvider, {UserContext} from "./providers/UserProvider";
import Dashboard from "./components/main/Dashboard";
import CreateResume from "./components/resume/CreateResume";

//Protected dashboard route
const PrivateRoute=({children, ...rest})=>{
    const user = useContext(UserContext)
    return (
        <Route {...rest} render={({location})=>
        user ? (children):(
            <Redirect to={{pathname:'/login',state:{from:location}
            }}/>)
        }/>
        )
}
const App =()=> {
        return (
            <UserProvider>
                <Router>
                    <Switch>
                        <Route exact path={'/home'}><Home/></Route>
                        <Route exact path={'/login'}><Login/></Route>
                        <PrivateRoute path={'/dashboard'}><Dashboard/></PrivateRoute>
                        <PrivateRoute path={'/createResume'}><CreateResume/></PrivateRoute>
                        <Redirect from={'/'} to={'/home'}/>
                    </Switch>
                </Router>
            </UserProvider>
        );
}
export default App;
