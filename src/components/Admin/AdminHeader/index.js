import React from "react";
import {Icon, Menu} from "antd";
import {NavLink} from "react-router-dom";


export default ({links}) => (
    <Menu mode="horizontal">
        <Menu.Item key="mail">
            <Icon type="tool"/>
            Admin panel
        </Menu.Item>
        {
            links.map((link, i) => (
                <Menu.Item key={i + link.name}>
                    <NavLink to={link.url}>
                        {link.name}
                    </NavLink>
                </Menu.Item>
            ))
        }
    </Menu>
)