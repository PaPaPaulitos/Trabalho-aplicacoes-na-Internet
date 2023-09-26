import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header/Header';
import FormCreateEvent from '../Components/FormCreateEvent/FormCreateEvent';
import Message from '../Components/Message/Message';


function CreateEvent() {
  return (
    <div>
    <Message msg="Backend ainda não existe" type="error"/>
    <FormCreateEvent/>
    </div>
  );
}

export default CreateEvent;