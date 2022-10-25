import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './components/login/Login';

import './App.css';
import 'antd/dist/antd.css'
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Sidebar/>}/>
      </Routes>
    </div>
  );
}

export default App;
