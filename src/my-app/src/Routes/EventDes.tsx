import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventDesc from '../Components/EventDesc/EventDesc';
import Message from '../Components/Message/Message';


function EventDes() {
  return (
    <div>
      <Message msg="Backend ainda não existe" type="error"/>
      <EventDesc/>
    </div>
    
  );
}

export default EventDes;