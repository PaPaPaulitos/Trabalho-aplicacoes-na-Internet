import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom';

import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet/>
    </div>
  );
}

export default App;
