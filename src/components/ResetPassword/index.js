import React from 'react';
import {Row,Col} from 'antd';
import ResetPasswordForm from './ResetPasswordForm'

import {resetPassword} from '../../actions/user'

import {connect} from 'react-redux'

import {useParams} from 'react-router-dom'

const ResetPassword = ({resetPassword}) => {
    
    const {token} = useParams()
    
    return  (
        <Row type="flex" align="middle" justify="center" style={{height:"100vh"}}>
            
            <Col xs={20} lg={6}>
                <ResetPasswordForm 
                    onSubmit={ data => resetPassword({token, ...data})}
                />
            </Col>
        
        </Row>
    );

};

const mapStateToProps = state => ({
   
})


export default connect( mapStateToProps, {resetPassword} ) (ResetPassword)