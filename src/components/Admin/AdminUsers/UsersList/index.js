import React,{useEffect} from 'react';
import { List } from 'antd';
import UserRow from './UserRow';

import {getUsers,deleteUser} from '../../../../actions/admin_users'
import {connect} from 'react-redux';

const UserList = ({users,getUsers,deleteUser}) => {

    useEffect(() => { 
        getUsers()
    },[getUsers])

    const onDeleteUser = id => {
        console.log(id);
        deleteUser(id)
    }
    
    const renderUser = user => {
        return <UserRow {...user} onDelete={onDeleteUser} />
    };
    
    return (<List 
        header={<h1>Users</h1>}
        dataSource={users}
        renderItem={renderUser}
    />);
}

const mapStateToProps = state => ({
    users: state.adminUsersReducer.users
})

export default connect(mapStateToProps,{getUsers,deleteUser})(UserList)