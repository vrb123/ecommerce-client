import React from 'react';
import {Row,Col} from 'antd';
import RegisterForm from './RegisterForm';

import {Redirect} from 'react-router-dom';

import {register} from '../../actions/user'

import {connect} from 'react-redux'

const Register = ({isAlreadyLoggedIn,register}) => {

    if (isAlreadyLoggedIn === true) {
        return <Redirect to="/home" />
    }

    return  (
        <Row type="flex" align="middle" justify="center" style={{height:"100vh"}}>
            
            <Col xs={20} lg={6}>
                <RegisterForm onSubmit={register} />
            </Col>
        
        </Row>
    );

};

const mapStateToProps = state => ({
    isAlreadyLoggedIn: state.authReducer.loggedIn,
})


export default connect( mapStateToProps, {register} ) (Register)