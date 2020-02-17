import React from 'react';
import {Button} from 'antd'
import isAdmin from '../../../../helpers/isAdmin';

export default ({onDelete,editHref,roles,id}) => {

    const userActions = [
        <Button 
            type="primary"  
            shape="circle" 
            icon="edit" 
            href={editHref}
        />,
        <Button 
            type="danger" 
            onClick={e => onDelete(id)}  
            shape="circle" 
            icon="delete" 
        />
    ];

    if (isAdmin(roles)) {
        return [];
    }
    return userActions;
};
