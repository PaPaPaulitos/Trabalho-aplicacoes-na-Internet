import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import img  from '../../img/logo.png';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <img src={ img } className='logo-eve'></img>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                            <Link className="nav-item nav-link" to='/' >Eventos</Link>
                            <Link className="nav-item nav-link" to='createevent' >Criar Evento</Link>
                            <Link className=" nav-item nav-link" to='/login' >Entrar</Link>
                </div>
            </div>
    </nav>
    );
}

export default Header;
