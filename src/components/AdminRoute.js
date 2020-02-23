import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import containsAdminRole from "../helpers/containsAdminRole";

export const AdminRoute = ({component: Component, isAdmin, ...rest}) => (
    <Route {...rest} render={props => (
        isAdmin ?
            <Component {...props} />
            :
            <Redirect to="/login"/>
    )
    }
    />
);

const mapStateToProps = state => ({
    isAdmin: state.authReducer.user && containsAdminRole(state.authReducer.user.roles)
});

export default connect(mapStateToProps, {})(AdminRoute)