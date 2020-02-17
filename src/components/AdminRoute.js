import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';
import isAdmin from '../helpers/isAdmin'

export const AdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render = { props => (
        isAdmin() ? 
        <Component {...props} /> 
        : 
        <Redirect to="/login" />
        )            
    }
    />
)