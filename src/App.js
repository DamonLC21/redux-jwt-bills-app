import React from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import history from './history'
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage'
import { PrivateRoute } from './components/PrivateRoute';
import Dashboard from './components/Dashboard';


function App({user}) {
  return (
    <div>
      <Router history={history}>
        <PrivateRoute exact path="/" component={Dashboard}/>
        <Route path='/login' render={(props) => <LoginPage {...props} />} />
        <Route path='/signup' render={(props) => <SignUpPage {...props} />} />
      </Router>
    </div>
  );
}

export default App;
