import {
    ADMIN_DELETE_USER,
    ADMIN_EDIT_USER,
    ADMIN_GET_ALL_USERS,
    ADMIN_GET_USER_BY_ID,
    ALERT_FAILURE,
    ALERT_INFO,
    ALERT_SUCCESS,
    JWT_TOKEN_WRONG,
    REQUEST_SEND
} from './types';
import config from '../config';
import assertResponseOK from './assertResponseOk'
import assertNotForbidden from './assertNotForbidden'
import authHeader from '../helpers/auth_header'
// import ForbiddenError from '../exceptions/ForbiddenError'

export const getUsers = () => async dispatch => {
    
    dispatch({
        type: REQUEST_SEND
    })

    try {
        const response = await fetch(`${config.API_URL}/admin/users`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...authHeader()
            },
        });

        assertNotForbidden(response)
        assertResponseOK(response)

        const users = await response.json()

        setTimeout( () => {
            
            dispatch({
                type: ALERT_SUCCESS,
                payload: 'Successfully got users'
            })

            dispatch({
                type: ADMIN_GET_ALL_USERS,
                payload: users
            })

        },1000 )
        
    }
    catch(err) {

        if(err.name === 'ForbiddenError') {
            dispatch({
                type: JWT_TOKEN_WRONG
            })
            return;
        }

        dispatch({
            type: ALERT_FAILURE,
            payload: 'Failed to fetch users'
        })
    } 
};


export const getUserById = id => async dispatch => {
    
    dispatch({
        type: REQUEST_SEND
    })

    try {
        const response = await fetch(`${config.API_URL}/admin/users/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...authHeader()
            },
        });

        assertNotForbidden(response)
        assertResponseOK(response)

        const user = await response.json()

        setTimeout( () => {
            
            dispatch({
                type: ALERT_SUCCESS,
                payload: 'Successfully got user'
            })

            dispatch({
                type: ADMIN_GET_USER_BY_ID,
                payload: user
            })

        },1000 )
        
    }
    catch(err) {

        if(err.name === 'ForbiddenError') {
            dispatch({
                type: JWT_TOKEN_WRONG
            })
            return;
        }

        dispatch({
            type: ALERT_FAILURE,
            payload: 'Failed to fetch user'
        })
    } 
};


export const deleteUser = id => async dispatch => {
    
    dispatch({
        type: REQUEST_SEND
    })

    try {
        const response = await fetch(`${config.API_URL}/admin/users/${id}`,{
            method: 'POST',
            'mode': 'cors',
            headers: {
                'Content-Type': 'application/json',
                ...authHeader(),
            },
        });

        assertNotForbidden(response)
        assertResponseOK(response)

        setTimeout( () => {
            
            dispatch({
                type: ALERT_INFO,
                payload: 'Successfully deleted user'
            })

            dispatch({
                type: ADMIN_DELETE_USER,
                payload: id
            })

        },1000 )
        
    }
    catch(err) {

        if(err.name === 'ForbiddenError') {
            dispatch({
                type: JWT_TOKEN_WRONG
            })
            return;
        }

        dispatch({
            type: ALERT_FAILURE,
            payload: 'Registration failed'
        })
    } 
};



export const editUser = (id,data) => async dispatch => {
    
    dispatch({
        type: REQUEST_SEND
    })

    try {
        const response = await fetch(`${config.API_URL}/admin/users/edit/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...authHeader()
            },
            body: JSON.stringify(data)
        });

        assertNotForbidden(response)
        assertResponseOK(response)

        setTimeout( () => {
            
            dispatch({
                type: ALERT_INFO,
                payload: 'Successfully edited user'
            })

            dispatch({
                type: ADMIN_EDIT_USER,
                payload: {
                    id,
                    ...data
                }
            })

        },1000 )
        
    }
    catch(err) {
       
        if(err.name === 'ForbiddenError') {
            dispatch({
                type: JWT_TOKEN_WRONG
            })
            return;
        }

        dispatch({
            type: ALERT_FAILURE,
            payload: 'Failed to edit user'
        })
    } 
};