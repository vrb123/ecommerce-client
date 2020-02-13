import {
    ACCOUNT_VERIFICATION_SUCCESS,
    ACCOUNT_VERIFICATION_FAILURE
} from '../actions/types';

const initialState = {}

export default (state = initialState, action) => {
    switch(action.type) {
        case ACCOUNT_VERIFICATION_SUCCESS:
            return {
                ok: true
            }
        case ACCOUNT_VERIFICATION_FAILURE:
            return {
                ok: false
            }
        default:
            return {...state}
    }
};