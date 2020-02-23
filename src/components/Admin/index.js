import React from 'react';
import AdminRoute from '../AdminRoute';
import {Switch, useRouteMatch} from 'react-router-dom';


import AdminUsers from './AdminUsers';
import AdminSpecifications from './AdminSpecifications';
import AdminProducts from './AdminProducts';

import AdminHeader from './AdminHeader';


const Admin = props => {
    let {path, url} = useRouteMatch();

    const links = [
        {
            url: url.substr(0, url.length - 5),
            name: 'Home'
        },
        {
            url: url + '/users',
            name: 'Users'
        },
        {
            url: url + '/specifications',
            name: 'Specifications'
        },
        {
            url: url + '/products',
            name: 'Products'
        }
    ];

    return (
        <>
            <AdminHeader
                links={links}
            />

            <Switch>

                <AdminRoute
                    path={`${path}/users`}
                    component={AdminUsers}
                />

                <AdminRoute
                    path={`${path}/specifications`}
                    component={AdminSpecifications}
                />

                <AdminRoute
                    path={`${path}/products`}
                    component={AdminProducts}
                />

            </Switch>
        </>
    );
};

export default Admin;
