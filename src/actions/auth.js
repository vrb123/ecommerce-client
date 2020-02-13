// localStorage.setItem('user', JSON.stringify(user));

import config from '../config';
import assertResponseOk from './assertResponseOk';
import {USER_LOGIN_FAILURE,USER_LOGIN_SUCCESS,USER_LOGIN_REQUEST,USER_LOGOUT} from './types';

export const login = data => async dispatch => {
    dispatch({
        type: USER_LOGIN_REQUEST,
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

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: result
        })
    }
    catch(err) {
       dispatch({
           type: USER_LOGIN_FAILURE
       })
    } 
    
};

export const logout = () => async dispatch => {
    localStorage.removeItem('user')
    dispatch({
        type:USER_LOGOUT
    })
};