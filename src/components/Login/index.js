import React from 'react';
import {Row,Col} from 'antd';
import LoginForm from './LoginForm';

import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux'
import {login} from '../../actions/auth'

const Login = ({login,isAlreadyLoggedIn}) => {

    if (isAlreadyLoggedIn === true) {
        return <Redirect to="/home" />
    }

    return  (
        <Row type="flex" align="middle" justify="center" style={{height:"100vh"}}>
            
            <Col xs={20} lg={6}>
                <LoginForm onSubmit={login}  />
            </Col>
        
        </Row>
    );

};

const mapStateToProps = state => ({
    isAlreadyLoggedIn: state.authReducer.loggedIn
})

export default connect(mapStateToProps,{login})(Login)