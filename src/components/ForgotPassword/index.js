import React from 'react';
import {Row,Col} from 'antd';
import ForgotPasswordForm from './ForgotPasswordForm';

import {connect} from 'react-redux';
import {forgotPassword} from '../../actions/user'

import {Redirect} from 'react-router-dom'

const ForgotPassword = ({isAlreadyLoggedIn,forgotPassword}) => {

    if (isAlreadyLoggedIn === true) {
        return <Redirect to="/home" />
    }

    return  (
        <Row type="flex" align="middle" justify="center" style={{height:"100vh"}}>
            
            <Col xs={20} lg={6}>
                <ForgotPasswordForm onSubmit={forgotPassword} />
            </Col>
        
        </Row>
    );

};

const mapStateToProps = state => ({
    isAlreadyLoggedIn: state.authReducer.loggedIn
})

export default connect(mapStateToProps,{forgotPassword})(ForgotPassword)