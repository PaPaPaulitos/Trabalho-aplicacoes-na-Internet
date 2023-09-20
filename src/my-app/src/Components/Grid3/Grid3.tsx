import './Grid3.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';


function Grid3() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-sm">
            <Card/>
            </div>
            <div className="col-sm">
            <Card/>
            </div>
            <div className="col-sm">
            <Card/>
            </div>
        </div>
    </div>
    );
}

export default Grid3;
