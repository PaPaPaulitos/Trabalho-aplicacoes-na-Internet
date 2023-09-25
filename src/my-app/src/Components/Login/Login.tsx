import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Login.css';




function Login() {
    return (
        <div className='long_div'>
            <form action='post'>
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Email"></input>
                </div>
                    <div className="form-group">
                    <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Senha"></input>
                </div>
                <Link className='dashbord_link' to='/register'>Não tenho cadastro</Link>
                <button type="submit" className="btn btn-primary login-div">Entrar</button>
            </form>
        </div>
    );
}

export default Login;