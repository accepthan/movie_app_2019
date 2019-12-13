import React from "react";
import PropTypes from "prop-types";
import './App.css';

const Movie = ({ id, year, title, summary, poster, genres }) => {

    summary = summary.length > 140 ? summary.slice(0, 140)+"..." : summary;

    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div>
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">{genres.map((genre, i) => <li className="genres_genre" key={i}>{genre}</li>)}</ul>
                <p className="movie_summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;