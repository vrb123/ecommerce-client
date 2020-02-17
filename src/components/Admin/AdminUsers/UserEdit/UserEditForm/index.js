import React,{useState} from 'react';
import {Form,Select,Button} from 'antd';
import {useParams} from 'react-router-dom'
import RoleSelect from './RoleSelect';
import {ADMIN,CUSTOMER} from '../../../../../constants/user_roles'
import {ACTIVE,NOT_ACTIVE,DELETED} from '../../../../../constants/user_status'


import statusMap from '../../../../../hash_maps/status';
import userRolesMap from '../../../../../hash_maps/user_roles';

const availableRoles = [ADMIN,CUSTOMER]
const availableStatuses = [ACTIVE,NOT_ACTIVE,DELETED]



const UserEditForm = props => {

    const {id} = useParams();
    const {status: statusObject,roles: roleObjects,onSubmit} = props;

    const roles = roleObjects.map(role => ({
                    key: role.name,
                    value: userRolesMap[role.name]
                  })
    );

    const [selected,setSelected] = useState(roles);

    const {getFieldDecorator} = props.form;

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            const {status,roles} = values;
            onSubmit({
                status,
                roles: roles.map(role => ({name: role.key}))
            })
          }
        });
      };

    return (
    <Form  onSubmit={handleSubmit}>

        <h1>User edit</h1>
        
        <Form.Item  hasFeedback>
          {getFieldDecorator('status', {
            rules: [{ required: true, message: 'Please select status!' }],
          })(
            <Select placeholder="Please select a status" initialValue={{key: statusObject, value: statusMap[statusObject]}}>
              {
                  availableStatuses.map(status => 
                    <Select.Option value={status}>{statusMap[status]}</Select.Option>
                  )
              }
            </Select>,
          )}
        </Form.Item>

        <Form.Item >
          {getFieldDecorator('roles', {
            rules: [
              { required: true, message: 'Please select roles', type: 'array' },
            ],
          })(
            <RoleSelect 
                    options={availableRoles} 
                    selected={selected} 
                    onChange={setSelected}
            />
          )}
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
    </Form>
                

    );

};

const WrapperUserEditForm = Form.create({ name: 'validate_other' })(UserEditForm);

export default WrapperUserEditForm;