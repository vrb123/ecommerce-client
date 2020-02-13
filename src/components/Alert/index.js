import React,{useEffect} from 'react'

import {notification, Spin} from 'antd'

import {connect} from 'react-redux'

const Alert =  ({alert,loading}) => {
    
    const openNotification = (type,message,isLoading) => {
        notification[type]({
          message: message,
          description: isLoading ? <Spin /> : null,
          duration: 1.5
        });
    };

    useEffect(() => {
        if (alert && alert.type) {
            openNotification(alert.type,alert.message)
        }
    },[alert]);

    useEffect(() => {
        if (loading && loading.isLoading === true) {
            openNotification('info','Loading...',true)
        }
    },[loading])

    return null;
};

const mapStateToProps = state => ({
    alert: state.alertReducer,
    loading: state.loadingReducer
})

export default connect(mapStateToProps)(Alert)