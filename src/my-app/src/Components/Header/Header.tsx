import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to='/' >LOGO</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to='/' >Eventos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='createevent' >Criar Evento</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/login' >Entrar</Link>
                </li>
                </ul>
    </nav>
    );
}

export default Header;
