import React from 'react';
import {Switch, useRouteMatch} from 'react-router-dom';

import {Col, Row} from 'antd';
import AdminRoute from '../../AdminRoute';


import AdminProductsList from './AdminProductsList';
import AdminProductEdit from "./AdminProductEdit";
import AdminAddProduct from "./AdminAddProduct";


const AdminProducts = () => {

    const {path} = useRouteMatch();

    return (
        <Row type="flex" align="middle" justify="center">
            <Col xs={23}>
                <Switch>

                    <AdminRoute
                        path={`${path}`}
                        exact
                        component={AdminProductsList}
                    />

                    <AdminRoute
                        path={`${path}/add`}
                        component={AdminAddProduct}
                    />

                    <AdminRoute
                        path={`${path}/edit/:id`}
                        component={AdminProductEdit}
                    />

                </Switch>
            </Col>
        </Row>
    );
};


export default AdminProducts;