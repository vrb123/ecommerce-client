import React from 'react';
import {Button, Descriptions, Divider} from 'antd';

import rolesHashMap from '../../../../hash_maps/user_roles';

import profileFieldsMap from "../helpers/profileFieldsMap";

export default ({onToggle, roles, ...profileInfo}) => {
    return (
        <Descriptions
            layout="horizontal"
            bordered
            column={1}
            title={
                <h1>
                    Profile info <Divider type="vertical"/> <Button type="dashed" icon="edit"
                                                                    onClick={onToggle}>Edit</Button>
                </h1>
            }
        >
            {
                Object.entries(profileInfo).map(([name, value]) => (
                    <Descriptions.Item key={name} label={profileFieldsMap[name]}>{value}</Descriptions.Item>
                ))
            }

            <Descriptions.Item key="roles"
                               label={profileFieldsMap['roles']}> {roles.map(role => rolesHashMap[role.name]).join(', ')} </Descriptions.Item>
        </Descriptions>
    );
};
