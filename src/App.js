import React from 'react';

import { Layout } from 'antd';

// Routing
import {Route,Switch} from 'react-router-dom';

// Pages
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';

import {PrivateRoute} from './components/PrivateRoute'


// Redux
import {Provider} from 'react-redux';
import store from './store'
import Home from './components/Home';

export default () => {
    return (
        <Provider store={store}>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/forgotPassword" component={ForgotPassword} />
                    <PrivateRoute path="/home" component={Home} />
                </Switch>
            </Layout>
        </Provider>
    )
};