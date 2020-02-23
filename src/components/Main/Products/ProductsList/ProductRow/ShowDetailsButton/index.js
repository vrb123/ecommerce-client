import React from "react";
import {Button} from "antd";

export default ({onClick, title = ""}) => (
    <Button
        type="dashed"
        shape="round"
        onClick={onClick}
        icon="eye"
    >{title}</Button>
);
