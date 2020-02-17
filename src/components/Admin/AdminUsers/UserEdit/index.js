import React,{useEffect,useState} from 'react';
import UserEditForm from './UserEditForm'

import {Result} from 'antd'

import {getUserById,editUser} from '../../../../actions/admin_users'
import {connect} from 'react-redux';

import {useParams} from 'react-router-dom'


const UserEdit = ({users,getUserById,editUser,isLoading}) => {
    
    const [user,setUser] = useState(null);
    const {id} = useParams();
    const [error,setError] = useState(false);

    useEffect(() => {
        getUserById(id)
    },[id,getUserById]);

    useEffect(() => {
        const foundUser = users.find( user => user.id == id );
        if (!foundUser) {
            setError(true)
        }
        else {
            setUser(foundUser);
        }
    },[users,id]);

    if (user) {
        return <UserEditForm 
                    onSubmit={data => editUser(id,data)}
                    {...user}
                />
    }

    if (error && !isLoading) {
        return <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                />
    }

    return null;
    
};


const mapStateToProps = state => ({
    users: state.adminUsersReducer.users,
    isLoading: state.loadingReducer.isLoading
});

export default connect(mapStateToProps,{getUserById,editUser})(UserEdit)