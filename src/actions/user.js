import {
    ALERT_SUCCESS,
    ALERT_FAILURE,
    REQUEST_SEND,
    ACCOUNT_VERIFICATION_SUCCESS,
    ACCOUNT_VERIFICATION_FAILURE
} from './types'
import config from '../config'
import assertResponseOk from './assertResponseOk'

export const register = data => async dispatch => {
    
    dispatch({
        type: REQUEST_SEND
    })

    try {
        const response = await fetch(`${config.API_URL}/auth/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        });
        assertResponseOk(response)
        setTimeout( () => {
            dispatch({
                type: ALERT_SUCCESS,
                payload: 'Successfully registered'
            })
        },1000 )
        
    }
    catch(err) {
        dispatch({
            type: ALERT_FAILURE,
            payload: 'Registration failed'
        })
    } 
    
};

export const forgotPassword = data => async dispatch => {
    
    dispatch({
        type: REQUEST_SEND
    })

    try {
        const response = await fetch(`${config.API_URL}/auth/forgotPassword`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        });
        assertResponseOk(response)
        setTimeout( () => {
            dispatch({
                type: ALERT_SUCCESS,
                payload: 'Checkout email'
            })
        },1000 )
        
    }
    catch(err) {
        setTimeout( () => {
            dispatch({
                type: ALERT_FAILURE,
                payload: 'Registration failed'
            })
        },1000 )
    } 

};


export const resetPassword = data => async dispatch => {
    
    dispatch({
        type: REQUEST_SEND
    })

    try {
        const response = await fetch(`${config.API_URL}/auth/resetPassword`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        });
        assertResponseOk(response)
        setTimeout( () => {
            dispatch({
                type: ALERT_SUCCESS,
                payload: 'The password has been reset'
            })
        },1000 )
        
    }
    catch(err) {
        setTimeout( () => {
            dispatch({
                type: ALERT_FAILURE,
                payload: 'Failed to reset password'
            })
        },1000 )
    } 
};

export const verify = token => async dispatch => {
    
    dispatch({
        type: REQUEST_SEND
    })

    try {
        const response = await fetch(`${config.API_URL}/auth/verify/${token}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        assertResponseOk(response)
        setTimeout( () => {

            dispatch({
                type: ALERT_SUCCESS,
                payload: 'Account has been verified'
            })

            dispatch({
                type: ACCOUNT_VERIFICATION_SUCCESS
            })
            
        },1000 )
        
    }
    catch(err) {
        setTimeout( () => {

            dispatch({
                type: ALERT_FAILURE,
                payload: 'Failed to verify account'
            })

            dispatch({
                type: ACCOUNT_VERIFICATION_FAILURE
            })

        },1000 )
    } 
};

export const resendVerification = data => async dispatch => {
    dispatch({
        type: REQUEST_SEND
    })

    try {
        const response = await fetch(`${config.API_URL}/auth/resend`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        assertResponseOk(response)
        setTimeout( () => {

            dispatch({
                type: ALERT_SUCCESS,
                payload: 'Check email'
            })

        },1000 )
        
    }
    catch(err) {
        setTimeout( () => {

            dispatch({
                type: ALERT_FAILURE,
                payload: 'Wrong email or internal error'
            })

        },1000 )
    } 
};