import React from 'react';
import { Button } from 'antd';
import {connect} from 'react-redux'

import {Redirect} from 'react-router-dom'

import {logout} from '../../actions/auth'

const Home = ({isLoggedIn,logout}) => {

    if (!isLoggedIn) 
        return <Redirect to="/login" />


    return (
        <div>
            <Button
                type="primary"
                onClick={logout}
                title="Logout"
            >
            Log out
            </Button>
        </div>
    )
};

const mapStateToProps = state => ({
    isLoggedIn: state.authReducer.loggedIn,
})


export default connect(mapStateToProps,{logout})(Home)
