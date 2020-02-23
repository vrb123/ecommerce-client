import React from 'react';
import {ADMIN, CUSTOMER} from '../../../../../../constants/user_roles';
import {Tag} from 'antd';

export default ({roles}) => {
    let i = 0;
    return roles.map(
        role => {
            i++;
            switch(role.name) {
                case CUSTOMER:
                    return (
                        <Tag key={i} color="#87d068">Customer</Tag>
                    )
                case ADMIN:
                    return (
                        <Tag key={i} color="#f50">Admin</Tag>
                    )
                default:
                    return null;
            }
        }
    );
};