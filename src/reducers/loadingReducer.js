import {REQUEST_SEND} from '../actions/types'

const initialState = {}

export default (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_SEND:
            return {
                isLoading: true
            }
        default: 
            return {}
    }
}