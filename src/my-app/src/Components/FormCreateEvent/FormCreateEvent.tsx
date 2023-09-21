import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import img from "../../img/evento-image.jpg"
import './FormCreateEvent.css';


function FromCreateEvent() {
    return (
        <div className='container'>
            <form action="" method="post">
                <label htmlFor="createEvent">Nome do Evento:</label>
                <input type="text" name="nome_evento" id="nome_evento" />
                <label htmlFor="createEvent">Data do Evento:</label>
                <input type="date" name="data_evento" id="data_evento" />
                <label htmlFor="createEvent">Local do Evento:</label>
                <input type="text" name="local_evento" id="local_evento" />
                <input type="radio" name="evento_privado" id="evento_privado" value={"sim"} />
                <label htmlFor="createEvent">Sim</label>
                <input type="radio" name="evento_privado" id="evento_privado" value={"nao"} />
                <label htmlFor="createEvent">Não</label>
                <label htmlFor="createEvent">Descrição do Evento:</label>
                <textarea name="descricao_evento" id="descricao_evento" cols={30} rows={10}></textarea>
                <label htmlFor="createEvent">Imagem do Evento:</label>
                <input type="file" id="image" name="image" placeholder='Escolher Imagem' className="from-control-file"></input>
                <input type="submit" className="btn btn-primary" value="Criar Evento"></input>
            </form>
        </div>
    );
}

export default FromCreateEvent;