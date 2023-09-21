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

function EventDesc() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">

                </div>
                <div className="col">
                    <h1>EVENTO</h1>
                    <p className="event-city"><GeoAltFill/>CIDADE DO EVENTO</p>
                    <p className="event-owner"><EmojiSmileUpsideDown/>DONO DO EVENTO</p>
                    <p className=""><Calendar2CheckFill/>DATA</p>
                    <p className="events-participants"><PeopleFill/>QUANTIDADE DE PARTICIPANTES</p>
                    <p className=""><ChatSquareTextFill/>DESCRICAO</p>
                    <form action="" method="get">
                        <input type="submit" className="btn btn-primary" value="Participar do Evento"></input>
                    </form>
                </div>

            </div>
        </div>

    );
}

export default EventDesc;




 