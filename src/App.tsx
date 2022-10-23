import React from 'react';
import Login from './components/login/Login';

import './App.css';
import { Route, Routes } from 'react-router-dom';

function Home() {
  return(
    <div>Home</div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
