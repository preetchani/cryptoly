import React, { useState,useEffect } from "react";
import {Button,Typography, Menu, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptoLogo.png";
const Navbar = () => {
  
  const [activeMenu,setActiveMenu] = useState(true);
  const [screenSize,setScreenSize] = useState(null);

  useEffect(() => {
   const handleResize = () => setScreenSize(window.innerWidth);

   window.addEventListener('resize',handleResize);
   handleResize();

   return ()=>window.removeEventListener('resize',handleResize);

  }, []);

  useEffect(() => {
    if(screenSize<768){
      setActiveMenu(false);
    } else{
      setActiveMenu(true);
    }
  }, [screenSize])
  return (
    <div className="nav-container">
      {/*------------ Side menu logo container-------------- */}
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoly</Link>
        </Typography.Title>
        <Button className="menu-control-container" onClick={()=>setActiveMenu(!activeMenu)}><MenuOutlined/></Button>
      </div>
      {/* -------------Side Menu Items --------------------*/}
      {activeMenu && (
         <Menu theme="light">
         <Menu.Item key="home" icon={<HomeOutlined />}>
           <Link to="/">Home</Link>
         </Menu.Item>
         <Menu.Item key="currencies" icon={<FundOutlined />}>
           <Link to="/crytocurrencies">Cryptocurrencies</Link>
         </Menu.Item>
         <Menu.Item key="exchanges" icon={<MoneyCollectOutlined />}>
           <Link to="/exchanges">Exchanges</Link>
         </Menu.Item>
         <Menu.Item key="news" icon={<BulbOutlined />}>
           <Link to="/news">News</Link>
         </Menu.Item>
       </Menu>
      )}
     
    </div>
  );
};

export default Navbar;
