import React from 'react'
import {Icon} from 'antd';

export default ({status}) => {

    switch(status) {
        case 'ACTIVE':
            return <Icon type="check" />
        case 'NOT_ACTIVE':
            return <Icon type="question" />
        case 'DELETED':
            return <Icon type="delete" />
        default:
            return null;
    }
};