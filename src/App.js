import React from 'react'
import {Link,Route,Switch} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar"><Navbar/></div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
