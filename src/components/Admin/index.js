import React from 'react';
import {AdminRoute} from '../AdminRoute'
import {useRouteMatch,Switch} from 'react-router-dom'
import AdminUsers from './AdminUsers';

const Admin = props => {
    let { path, url } = useRouteMatch();

    return (
        <>          
            <Switch>

                <AdminRoute 
                    path={`${path}/users`} 
                    component={AdminUsers} 
                />
            
            </Switch>
        </>
    );
};

export default Admin;