import React from 'react';
import './EventDesc.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { ChatSquareTextFill,
        GeoAltFill,
        PeopleFill,
        Calendar2CheckFill,
        EmojiSmileUpsideDown
} from 'react-bootstrap-icons';
import img from '../../img/banda 01.jpg';

function EventDesc() {
    return (
        <div className="container_see_more">
            <div className="row">
                <div className="col">
                    <img className="coldplay" src={img} alt="Imagem do Evento"/>
                </div>
                <div className="col">
                    <h1>EVENTO</h1>
                    <p className="event_p"><GeoAltFill/>CIDADE DO EVENTO</p>
                    <p className="event_p"><EmojiSmileUpsideDown/>DONO DO EVENTO</p>
                    <p className="event_p"><Calendar2CheckFill/>DATA</p>
                    <p className="event_p"><PeopleFill/>QUANTIDADE DE PARTICIPANTES</p>
                    <p className="event_p"><ChatSquareTextFill/>DESCRICAO</p>
                    <form action="" method="get">
                        <input type="submit" className="btn btn-primary" value="Participar do Evento"></input>
                    </form>
                </div>

            </div>
        </div>

    );
}

export default EventDesc;




 