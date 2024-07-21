import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './moviedetails.css'

interface Details {
    title: string;
    poster: string;
    director: string;
    actors: string;
    plot: string;
}

const MovieDetails = () => {
    const id = useParams().id;
    const [item, setItem] = useState({} as Details);

    useEffect(() => {
        axios.get<Details>(`https://moviesapi.ir/api/v1/movies/${id}`)
            .then(res => setItem(res.data))
    }, []);
    return (
        <div className="container">
            <div className="row pt-5 details">
            <div className="col-12 col-lg-3 px-2 text-center text-lg-start" style={{backgroundColor:"var(--bg)"}}>
                <img className="rounded" src={item.poster} alt={item.title}/>
            </div>
            <div className="col-12 col-lg-8 px-2" style={{backgroundColor:"var(--bg)"}} >
                <h3>{item.title}</h3>
                <p>
                    <b>Director:</b> {item.director} <br />
                    <b>Actors:</b> {item.actors}
                </p>
                <p> <b>Plot:</b> {item.plot}</p>
            </div>
        </div>
        </div>
    );
}

export default MovieDetails;
