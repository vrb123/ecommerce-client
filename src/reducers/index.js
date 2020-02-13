import {combineReducers} from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import loading from './loadingReducer'
import accountVerification from './accountVerificationReducer'

export default combineReducers({
    authReducer: auth,
    alertReducer: alert,
    loadingReducer: loading,
    accountVerificationReducer: accountVerification
})