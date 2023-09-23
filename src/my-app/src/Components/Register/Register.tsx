import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Register.css';




function Register() {
    return (
        <div className='reg_div' >
            <form action='post'>
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Nome"></input>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email"></input>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Senha"></input>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Confirmar Senha"></input>
                </div>
                <Link className='dashbord_link' to='/login'>Já tenho login</Link>
                <button type="submit" className="btn btn-primary login-div">Cadastrar</button>
            </form>
        </div>
    );
}

export default Register;