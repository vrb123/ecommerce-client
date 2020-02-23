import React from 'react';

import {Layout} from 'antd';

import "./App.css";
// Routing
import {Route, Switch} from 'react-router-dom';
// Pages
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Main';
import ResetPassword from './components/ResetPassword';
import VerifyAccount from './components/VerifyAccount';
import Admin from './components/Admin';
// Private route
import PrivateRoute from './components/PrivateRoute'
// Admin route
import AdminRoute from './components/AdminRoute';
// Redux
import {Provider} from 'react-redux';
import store from './store'
// Alert
import Alert from './components/Alert';
// Jwt Listener
import JwtListener from './components/JwtListener';


export default () => {
    return (
        <Provider store={store}>
            <JwtListener>
                <Alert/>
                <Layout>
                    <Switch>

                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/verify/:token" component={VerifyAccount}/>
                        <Route path="/forgotPassword" component={ForgotPassword}/>
                        <Route path="/resetPassword/:token" component={ResetPassword}/>

                        <AdminRoute path="/admin" component={Admin}/>

                        <PrivateRoute path='/' component={Home}/>

                    </Switch>
                </Layout>
            </JwtListener>
        </Provider>
    )
};