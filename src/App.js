import React from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux'
import history from './history'
import { PrivateRoute } from './components/PrivateRoute';
import NavBar from './components/NavBar'
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard';


function App({user}) {
  return (
    <>
      <Router history={history}>
        { user ? <NavBar /> : null}
        { user ? topDash(user) : null}
        <PrivateRoute exact path="/" component={Dashboard}/>
        <Route path='/login' render={(props) => <LoginPage {...props} />} />
        <Route path='/signup' render={(props) => <SignUpPage {...props} />} />
      </Router>
    </>
  );
}

const topDash = (user) => (
  <div id='dash-top'>
    <p> {user.first_name}'s Dashboard</p>
  </div>
)

const mapStateToProps = ({user}) => ({
  user
})

export default connect(mapStateToProps, null)(App)
