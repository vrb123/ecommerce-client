import React from 'react';
import {Button} from 'antd'

export default ({onDelete, editHref, id}) => {
    return [
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
};
