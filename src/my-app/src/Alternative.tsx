import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalStyle from './Styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Outlet/>
      <GlobalStyle />
    </div>
  );
}

export default App;
