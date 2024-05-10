import { useEffect, useState } from 'react'
import './Movie.css'


const Movie = ({movieList, onClicking}) => {
    // console.log(movieList);

    const {Poster, Title, Year, imdbID} = movieList;

    return (
        <li className="movie" onClick={() => onClicking(imdbID)}>
            <div className='poster-container'>
                <img className='movie-poster' src={Poster} alt={`${Title} poster`}/>
            </div>
            <div>
                <h3 className='movie-title'>{Title}</h3>
                <p className='movie-year'>{Year}</p>
            </div>
        </li>
    )
}

export default Movie;