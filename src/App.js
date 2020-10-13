import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/Login';
import Resume from './components/Resume';
import CoverLetter from './components/CoverLetter';

const App=()=> {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Login}/>
        <Route exact path={'/resume'} component={Resume}/>
        <Route exact path={'coverLetter'} component={CoverLetter}/>
      </Switch>
    </Router>
  );
}

export default App;
