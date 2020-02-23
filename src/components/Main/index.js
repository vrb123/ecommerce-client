import React from 'react';
import {Layout} from 'antd';
import {connect} from 'react-redux'

import {Redirect, Switch, useRouteMatch} from 'react-router-dom'

import {logout} from '../../actions/auth'

import Header from './components/Header';
import PrivateRoute from "../PrivateRoute";
import Profile from "./Profile";

import containsAdminRole from "../../helpers/containsAdminRole";
import Products from "./Products";

const Home = ({isLoggedIn, logout, isAdmin}) => {

    const {path, url} = useRouteMatch();

    const links = {
        profile: '/profile',
        home: '/',
        products: '/products'
    };

    if (isAdmin)
        links.admin = "/admin";

    if (!isLoggedIn)
        return <Redirect to="/login"/>;

    return (
        <Layout>

            <Header
                onLogout={logout}
                links={links}
            />

            <Switch>

                <PrivateRoute
                    path={`/profile`}
                    component={Profile}
                />

                <PrivateRoute
                    path={`/products`}
                    component={Products}
                />

            </Switch>
        </Layout>
    );
};

const mapStateToProps = state => ({
    isLoggedIn: state.authReducer.loggedIn,
    isAdmin: containsAdminRole(state.authReducer.user.roles)
});


export default connect(mapStateToProps,{logout})(Home)
