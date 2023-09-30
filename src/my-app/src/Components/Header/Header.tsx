import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import img  from '../../img/logo.svg';
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <img src={img} className='logo-eve' alt="Logo" />
            <button className="navbar-toggler" type="button" onClick={toggleMenu} style={{ zIndex: isOpen ? 1 : 0 }}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="listaDeLinks" style={{ zIndex: isOpen ? 1 : 0 }}>
                <div className="navbar-nav">
                    <Link className={`nav-item nav-link ${isOpen ? 'menu-layer' : ''}`} to="/">Eventos</Link>
                    <Link className={`nav-item nav-link ${isOpen ? 'menu-layer' : ''}`} to="createevent">Criar Evento</Link>
                    <Link className={`nav-item nav-link ${isOpen ? 'menu-layer' : ''}`} to="/login">Entrar</Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;
