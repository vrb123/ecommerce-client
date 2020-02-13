import {
    ALERT_SUCCESS,
    ALERT_FAILURE,
    ALERT_INFO,
    USER_LOGIN_FAILURE,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT
} from '../actions/types';

const initialState = { };

export default (state = initialState, action) => {
    switch(action.type) {
        case ALERT_SUCCESS:
            return {
                type: 'success',
                message: action.payload
            }
        case ALERT_FAILURE:
            return {
                type: 'error',
                message: action.payload
            }
        case ALERT_INFO: 
            return {
                type: 'info',
                message: action.payload
            }
        case USER_LOGIN_FAILURE:
                return {
                    type: 'error',
                    message: "Error while logging in..."
                }
        case USER_LOGIN_SUCCESS:
                return {
                    type: 'success',
                    message: "You have logged in"
                }
        case USER_LOGOUT:
                return {
                    type: 'info',
                    message: "You have logged out"
                }
        default:
            return {}
    }
};