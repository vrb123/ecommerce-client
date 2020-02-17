import React from 'react';
import {ADMIN,CUSTOMER} from '../../../../../../constants/user_roles';
import {Tag} from 'antd';

export default ({roles}) => {
    return roles.map(
        role => {
            switch(role.name) {
                case CUSTOMER:
                    return (
                        <Tag color="#87d068">Customer</Tag>
                    )
                case ADMIN:
                    return (
                        <Tag color="#f50">Admin</Tag>
                    )
                default:
                    return null;
            }
        }
    );
};