import {combineReducers} from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import loading from './loadingReducer'
import accountVerification from './accountVerificationReducer'
import adminUsers from './adminUsersReducer'
import jwt from './jwtReducer'
import specifications from './specificationsReducer'
import adminProducts from './adminProductsReducer'
import profile from './profileReducer'
import customerProducts from './customerProductsReducer'

export default combineReducers({
    authReducer: auth,
    alertReducer: alert,
    loadingReducer: loading,
    accountVerificationReducer: accountVerification,
    adminUsersReducer: adminUsers,
    jwtReducer: jwt,
    specificationsReducer: specifications,
    adminProductsReducer: adminProducts,
    profileReducer: profile,
    customerProductsReducer: customerProducts
});
