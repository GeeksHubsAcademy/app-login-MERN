import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../redux/actions/movies'

const MovieList = () => {
    const movies = useSelector(state => state.movie.movies)
    useEffect(() => {
        getAllMovies();
    }, [])
    return (
        <div>
            {movies?.map(movie =>
                <div className="movie" key={movie._id}>
                    <h1>{movie.title}</h1>
                    <img src={movie.poster_path} alt=""/>
                </div>)}
        </div>
    )
}

export default MovieList;
