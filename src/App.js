import React from 'react'
import {Link,Route,Switch} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';

import Navbar from './components/Navbar';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import Exchanges from './components/Exchanges';
import HomePage from './components/HomePage';
import News from './components/News';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* ----------------Left Side sidebar ----------------*/}
      <div className="navbar">
        <Navbar />
      </div>
      {/* --------------- Right side main layout ---------------- */}
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/crytocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
            </Switch>
          </div>
        </Layout>

      {/* -------- Footer Section -----------*/}
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ textAlign: "center", color: "white" }}
          >
            Cryptoly <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
