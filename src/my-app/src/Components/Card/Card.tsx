import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import img from "../../img/banda 01.jpg";

function Card() {
    return (
        <div className="card">
            <img src={img} className='card-img-top' alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link className="btn btn-primary" to='/eventdes'>Veja mais</Link>
            </div>
        </div>
    );
}

export default Card;
