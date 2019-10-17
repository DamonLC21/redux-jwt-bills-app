import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';

export const PrivateRoute = ({ ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('token')
            ? <Dashboard {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)