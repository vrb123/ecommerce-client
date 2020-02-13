import React from 'react';
import {Row,Col} from 'antd';
import Register from './RegisterForm';

export default () => {

    const registerUser = async data => {
        try {
            const response = await fetch("http://localhost:8024/api/v1/auth/register",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(data)
            });
            if (response.status === 200) {
                return {
                    ok: true
                }
            }
            throw new Error('Bad request');
        }
        catch(err) {
            console.log(err);
            return {
                ok: false
            }
        } 
        
    };

    return  (
        <Row type="flex" align="middle" justify="center" style={{height:"100vh"}}>
            
            <Col xs={20} lg={6}>
                <Register onSubmit={registerUser} />
            </Col>
        
        </Row>
    );

};
