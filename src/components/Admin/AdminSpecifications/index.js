import React from 'react';
import {Switch, useRouteMatch} from 'react-router-dom';

import {Col, Row} from 'antd';
import AdminRoute from '../../AdminRoute';
import SpecificationList from './SpecificationList';
import EditSpecification from './EditSpecification';

const AdminSpecifications = () => {

    let {path} = useRouteMatch();

    return (
        <Row type="flex" align="middle" justify="center">
            <Col xs={23}>

                <Switch>

                    <AdminRoute
                        path={`${path}`}
                        exact
                        component={SpecificationList}
                    />

                    <AdminRoute
                        path={`${path}/edit/:id`}
                        component={EditSpecification}
                    />

                </Switch>

            </Col>
        </Row>
    );
};


export default AdminSpecifications;
