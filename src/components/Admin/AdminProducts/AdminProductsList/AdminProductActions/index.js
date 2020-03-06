import React from 'react';
import {Button, Divider} from 'antd'

export default ({onDelete, editHref, id}) => {
    return [
        <Button
            type="primary"
            shape="circle"
            key={editHref + "editbutton"}
            icon="edit"
            href={editHref}
        />,
        <Divider type="vertical" key={editHref + "divider"}/>,
        <Button
            type="danger"
            onClick={() => onDelete(id)}
            key={editHref + "deletebutton"}
            shape="circle"
            icon="delete"
        />
    ];
};
