import React from 'react';
import {Row,Col} from 'antd';
import ForgotPasswordForm from './ForgotPasswordForm';

export default () => {

    return  (
        <Row type="flex" align="middle" justify="center" style={{height:"100vh"}}>
            
            <Col xs={20} lg={6}>
                <ForgotPasswordForm />
            </Col>
        
        </Row>
    );

};
