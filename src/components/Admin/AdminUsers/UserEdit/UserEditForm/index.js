import React, {useState} from 'react';
import {Button, Form, Select} from 'antd';
import RoleSelect from './RoleSelect';
import {ADMIN, CUSTOMER} from '../../../../../constants/user_roles'
import {ACTIVE, DELETED, NOT_ACTIVE} from '../../../../../constants/user_status'


import statusMap from '../../../../../hash_maps/status';
import userRolesMap from '../../../../../hash_maps/user_roles';

const availableRoles = [ADMIN,CUSTOMER]
const availableStatuses = [ACTIVE,NOT_ACTIVE,DELETED]



const AdminUserEditForm = props => {


    const {status: statusObject, roles: roleObjects, onSubmit} = props;

    const roles = roleObjects.map(role => ({
            key: role.name,
            value: userRolesMap[role.name]
        })
    );

    const [selectedRoles, setSelectedRoles] = useState(roles);
    const [status, setStatus] = useState(statusObject);

    const handleSubmit = e => {
        e.preventDefault();
        if (status && selectedRoles && selectedRoles.length > 0) {
            onSubmit({
                status,
                roles: selectedRoles.map(role => ({name: role.key}))
            })
        }
    };

    return (
        <Form onSubmit={handleSubmit}>

            <h1>User edit</h1>

            <Form.Item>
                <Select placeholder="Please select a status" value={status} onSelect={setStatus}>
                    {
                        availableStatuses.map(status =>

                            <Select.Option
                                value={status}
                            >
                                {statusMap[status]}
                            </Select.Option>
                        )
                    }
                </Select>
        </Form.Item>

        <Form.Item >
            <RoleSelect
                options={availableRoles}
                selected={selectedRoles}
                onChange={setSelectedRoles}
            />
        </Form.Item>

        <Form.Item >
            <Button type="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </Form.Item>
    </Form>
                

    );

};

export default AdminUserEditForm;
