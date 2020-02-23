import React from "react";
import {Button} from "antd";

export default ({onClick, title = ""}) => (
    <Button
        icon="left"
        type="dashed"
        onClick={onClick}
        shape="round"
    >
        {title}
    </Button>
)