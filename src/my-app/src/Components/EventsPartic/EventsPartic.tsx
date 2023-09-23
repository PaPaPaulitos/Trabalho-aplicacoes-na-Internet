import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './EventsPartic.css';
import img from "../../img/evento-image.jpg"



function EventsPartic() {
    return (
        <div>
            <h2 className="dhasbord_h2" >Eventos que estou Participando</h2>
            <p className="dashbord_p" >Você ainda não participa de nenhum evento, <Link className='dashbord_link' to='/' >Procurar eventos</Link></p>
        </div>
    );
}

export default EventsPartic;
