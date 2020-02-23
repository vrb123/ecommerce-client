import React from 'react';
import {Switch, useRouteMatch} from 'react-router-dom'
import UsersList from './UsersList';
import {Col, Row} from 'antd';
import AdminRoute from '../../AdminRoute';

import UserEdit from './UserEdit';

const AdminUsers = () => {

    let { path } = useRouteMatch();

    return (
        <Row type="flex" align="middle" justify="center">
            <Col xs={23}>         
                <Switch>

                    <AdminRoute 
                        path={`${path}`}
                        component={UsersList}
                        exact
                    />

                    <AdminRoute 
                        path={`${path}/edit/:id`}
                        component={UserEdit} 
                    />
                
                </Switch>
            </Col>
        </Row>
    );
    
};

export default AdminUsers;