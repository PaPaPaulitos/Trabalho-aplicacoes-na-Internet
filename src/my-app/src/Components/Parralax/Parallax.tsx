import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Parallax.css';
import img from "../../img/evento-image.jpg"



function Parallax() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <ol className= "carousel-indicators">
                <li data-target="carouselExampleSlidesOnly" data-slide-to="0" className="active"></li>
                <li data-target="carouselExampleSlidesOnly" data-slide-to="1"></li>
                <li data-target="carouselExampleSlidesOnly" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
<<<<<<< HEAD
                    <img className="paralaximage d-block w-100 img-fluid" src={img} alt="Evento" />
=======
                <img className="d-block w-100" src={img} alt="Evento" />
>>>>>>> 2548042fdcffcedbb622df75166f05292a7c7813
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
