import {
    ADMIN_GET_ALL_USERS,
    ADMIN_DELETE_USER,
    ADMIN_EDIT_USER,
    ADMIN_GET_USER_BY_ID
} from '../actions/types';

const initialState = { users: [] };

export default (state = initialState, action) => {
    switch(action.type) {
        case ADMIN_GET_ALL_USERS:
            return {
                users: action.payload
            }
        case ADMIN_GET_USER_BY_ID:
            return {
                users: [...state.users,action.payload]
            }
        case ADMIN_DELETE_USER:
            return {
                users: state.users
                            .map( user => {
                                if (action.payload === user.id) 
                                    return {...user,status: 'DELETED'}
                                return user;
                            })
            }
        case ADMIN_EDIT_USER:
            return {
                users: state.users.map( user => {
                    if (action.payload.id === user.id) 
                        return {...user,...action.payload}
                    return user;
                })
            }
        default:
            return {...state}
    }
};