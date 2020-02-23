import React from "react";
import {Icon, Menu} from 'antd';

import {Link} from 'react-router-dom';
import LogoutButton from "./LogoutButton";

export default ({links, onLogout}) => (
    <Menu mode="horizontal">

        <Menu.Item key="home-page">
            <Link to={links.home}>
                <Icon type="shop"/>
                E-commerce
            </Link>

        </Menu.Item>

        <Menu.Item key="profile">
            <Link to={links.profile}>
                <Icon type="user"/> Profile
            </Link>
        </Menu.Item>

        <Menu.Item key="products_page">
            <Link to={links.products}>
                <Icon type="shopping"/> Products
            </Link>
        </Menu.Item>

        {
            links.admin &&
            <Menu.Item key="admin_dashboard">
                <Link to={links.admin}>
                    <Icon type="dashboard"/> Admin
                </Link>
            </Menu.Item>
        }

        <Menu.Item key="logout-button">
            <LogoutButton title="Log out" onClick={onLogout}/>
        </Menu.Item>

    </Menu>
)