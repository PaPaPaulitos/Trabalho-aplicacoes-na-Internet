import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Parallax.css';
import img from "../../img/evento-image.jpg"



function Parallax() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="paralaximage d-block w-100 img-fluid" src={img} alt="Evento" />
                    <div className="carousel-caption d-none d-md-block">
                        <form className='form' action="" method="get">
                            <input className='search' type="text" name="search" id="search" placeholder="Digite Aqui..."></input>
                            <input className='submit' type="submit" value="Pesquisar"></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Parallax;
