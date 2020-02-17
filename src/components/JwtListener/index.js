import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth'
import {Redirect} from 'react-router-dom';


const JwtListener = ({isTokenWrong,logout,children}) => {
    if(isTokenWrong) {
        logout();
        return (
            <Redirect 
                to="/login" 
            />
        )
    }
    return (
        <>
            {children}
        </>
    );
};

const mapStateToProps = state => ({
    isTokenWrong: state.jwtReducer.isWrong
});

export default connect(mapStateToProps,{logout})(JwtListener);