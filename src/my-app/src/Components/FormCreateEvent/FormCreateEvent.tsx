import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import img from "../../img/evento-image.jpg"
import './FormCreateEvent.css';


function FromCreateEvent() {
    return (
        <div className='container'>
            <form action="" method="post">
                <label htmlFor="createEvent" className='label_form'>Nome do Evento:</label>
                <br/>
                <input type="text" name="nome_evento" id="nome_evento" className='text_form' />
                <br/>
                <label htmlFor="createEvent" className='label_form' >Data do Evento:</label>
                <br/>
                <input type="date" name="data_evento" id="data_evento" className='text_form' />
                <br/>
                <label htmlFor="createEvent" className='label_form'>Local do Evento:</label>
                <br/>
                <input type="text" name="local_evento" id="local_evento" className='text_form' />
                <br/>
                <label htmlFor="createEvent" className='label_form'>Evento é privado?</label>
                <br/>
                <div className='radio'>
                    <input type="radio" name="evento_privado" id="evento_privado" value={"sim"} className='radio_fom' />
                    <label htmlFor="createEvent" className='label_form'>Sim</label>
                    <input type="radio" name="evento_privado" id="evento_privado" value={"nao"} className='radio_fom' />
                    <label htmlFor="createEvent" className='label_form'>Não</label>
                <br/>
                </div>
                <label htmlFor="createEvent" className='label_form'>Descrição do Evento:</label>
                <br/>
                <textarea name="descricao_evento" id="descricao_evento" cols={30} rows={10} className='area_form'></textarea>
                <br/>
                <label htmlFor="createEvent" className='label_form'>Imagem do Evento:</label>
                <br/>
                <input type="file" id="image" name="image" placeholder='Escolher Imagem' className="fbtn btn-primary"></input>
                <br/>
                <br/>
                <input type="submit" className="btn btn-primary" value="Criar Evento"></input>
            </form>
        </div>
    );
}

export default FromCreateEvent;

 