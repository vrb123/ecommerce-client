import React from "react";
import {Button} from 'antd';

export default ({title = "Logout", onClick}) => (
    <Button
        icon='logout'
        type="dashed"
        onClick={onClick}
    >
        {title}
    </Button>
);
