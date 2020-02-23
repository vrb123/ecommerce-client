import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

export const PrivateRoute = ({component: Component, isAuthorized, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthorized ?
            <Component {...props} />
            :
            <Redirect to="/login"/>
    )
    }
    />
);

const mapStateToProps = state => ({
    isAuthorized: state.authReducer.user
});

export default connect(mapStateToProps, {})(PrivateRoute)