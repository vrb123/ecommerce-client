import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {verify,resendVerification} from '../../actions/user'
import {useParams} from 'react-router-dom'
import { Result,Col,Row } from 'antd';
import ResendVerificationForm from './ResendVerificationForm';

const VerifyAccount = ({verificationSuccess,verify,resendVerification}) => {
    
    const {token} = useParams();

    useEffect(() => {
        verify(token);
    },[verify,token]);

    if (verificationSuccess === false) {
        return (
            <Result
                status="error"
                title="The problem with account verification has occured."
                extra = {
                    <Row type="flex" align="middle" justify="center">
            
                        <Col xs={20} lg={6}>
                            <ResendVerificationForm onSubmit={resendVerification} />
                        </Col>
                
                    </Row>
                }
            />
        )
    }
    
    if (verificationSuccess === true) {
        return (

            
            <Result
                status="success"
                title="The account has been verified"
            />
        )
    }

    return null;
};

const mapStateToProps = state => ({
    verificationSuccess: state.accountVerificationReducer.ok 
});

export default connect(mapStateToProps,{verify,resendVerification})(VerifyAccount);
