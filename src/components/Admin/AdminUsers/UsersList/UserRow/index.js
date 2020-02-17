import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import {List,Skeleton} from 'antd'
import UserStatus from './UserStatus'
import UserActions from './UserActions'
import UserRoles from './UserRoles'


export default ({onDelete,...user}) => {

    const {id,firstName,lastName,email,roles,status} = user;

    let { path } = useRouteMatch();

    const actions = UserActions({
                                roles,
                                id,
                                onDelete: id => {
                                    onDelete(id)
                                },
                                editHref: `${path}/edit/${id}`
    });

    return (
        <List.Item 
            key={id} 
            actions={actions}
        >
            <Skeleton title={false} loading={false} active>
                
                <List.Item.Meta
                    title={
                        <div>
                            {firstName} {lastName} <UserStatus status={status} />
                        </div>
                    } 
                    description={email}
                />
                
                <UserRoles roles={roles} />

            </Skeleton>
        </List.Item>
    )
};