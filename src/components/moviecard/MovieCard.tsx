import { Col} from 'react-bootstrap'
import { Data } from '../../hooks/useData';
import './moviecard.css'
import { Link } from 'react-router-dom';

const MovieCard = ({ id,title, poster, year, country, imdb_rating }: Data) => {
    return (
        <Col>
            <div className='card overflow-hidden position-relative'>
                <span className="badge bg-warning position-absolute">{imdb_rating}</span>
                <img src={poster} />
                <div className='p-2'>
                    <div className="body">
                        <h3>
                            <Link className='title' to={`/${id}`}>{title}</Link>
                        </h3>
                    </div>
                    <div className="footer d-flex justify-content-between">
                        <p>country: {country}</p>
                        <p>year: {year}</p>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default MovieCard;
