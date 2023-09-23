import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './MyEvents.css';
import img from "../../img/evento-image.jpg"



function MyEvents() {
    return (
        <div>
            <h2 className="dhasbord_h2" >Meus Eventos</h2>
            <p className="dashbord_p" >Você ainda não tem eventos, <Link className='dashbord_link' to='/createevent' >Crie um evento</Link></p>
        </div>
    );
}

export default MyEvents;
