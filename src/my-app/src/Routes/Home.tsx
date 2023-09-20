import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header/Header';
import Parallax from '../Components/Parralax/Parallax';
import Teste from '../Components/Teste/Teste';
import Grid3 from '../Components/Grid3/Grid3';


function Home() {
  return (
    <div>
      <Parallax/>
      <Grid3/>
    </div>
  );
}

export default Home;