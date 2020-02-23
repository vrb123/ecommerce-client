import {EDIT_OWN_PROFILE, GET_OWN_PROFILE} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {

    switch (action.type) {
        case GET_OWN_PROFILE:
            return {
                ...action.payload
            };
        case EDIT_OWN_PROFILE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }

};
