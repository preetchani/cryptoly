import React from 'react';
import { Button,Typography,Menu,Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png'
const Navbar = () => {
    return (
        <div className="nav-container">
            {/*------------ Side menu logo container-------------- */}
            <div className="logo-container">
                <Avatar src={icon} size='large'/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoly</Link>
                </Typography.Title>
            </div>
            {/* -------------Side Menu Items --------------------*/}
            <Menu theme="dark">
                <Menu.Item key="home" icon={<HomeOutlined/>}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="currencies" icon={<FundOutlined/>}>
                    <Link to="/crytocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item  key="exchanges" icon={<MoneyCollectOutlined/>}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item key="news" icon={<BulbOutlined/>}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar;

