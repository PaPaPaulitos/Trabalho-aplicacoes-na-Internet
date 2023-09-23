import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header/Header';
import MyEvents from '../Components/MyEvents/MyEvents';
import HorizontalLine from '../Components/HorizontalLine/HorizontalLine';
import EventsPartic from '../Components/EventsPartic/EventsPartic';


function Dashboard() {
  return (
    <div>
      <MyEvents />
      <HorizontalLine />
      <EventsPartic />
    </div>
   
  );
}

export default Dashboard;