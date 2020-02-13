// localStorage.setItem('user', JSON.stringify(user));

import config from '../config';
import assertResponseOk from './assertResponseOk';
import {USER_LOGIN_FAILURE,USER_LOGIN_SUCCESS,REQUEST_SEND,USER_LOGOUT} from './types';

export const login = data => async dispatch => {
    dispatch({
        type: REQUEST_SEND,
    })
    try {
        const response = await fetch(`${config.API_URL}/auth/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        assertResponseOk(response)
        
        const result = await response.json()
        
        localStorage.setItem('user',JSON.stringify(result) )

        setTimeout( () => {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: result
            })
        }, 1000 )
        
    }
    catch(err) {
        setTimeout( () => {
            dispatch({
                type: USER_LOGIN_FAILURE
            })
        }, 1000 )
    } 
    
};

export const logout = () => async dispatch => {
    localStorage.removeItem('user')
    dispatch({
        type:USER_LOGOUT
    })
};