import React from 'react';
import { Button,Typography,Menu,Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined,MoneyOutlined,BulbOutlined,FundOutlined} from '@ant-design/icons';
export const navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoly</Link>
                </Typography.Title>
            </div>
        </div>
    )
}

