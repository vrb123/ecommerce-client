import { JWT_TOKEN_WRONG } from '../actions/types';

const initialState = {isWrong: false}

export default (state = initialState, action) => {
    switch(action.type) {
        case JWT_TOKEN_WRONG:
            return {isWrong: true};
        default:
            return {...initialState};
    }
};