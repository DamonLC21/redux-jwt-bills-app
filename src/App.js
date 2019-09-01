import React from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import history from './history'
import SignUpPage from './components/SignUpPage';


function App({user}) {
  return (
    <div>
      <Router history={history}>
        <Route path='/signup' component={SignUpPage} />
      </Router>
    </div>
  );
}

export default App;
