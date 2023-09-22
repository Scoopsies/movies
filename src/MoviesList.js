import React, {useState, useEffect} from 'react'
import axios from 'axios'


const MoviesList = ({movies, setMovies}) => {
  
  const increaseStar = async(movie) => {
    const newRating = movie.stars + 1;
    const {data} = await axios.put(`/api/movies/${movie.id}`, {name: movie.name, stars: newRating})
    setMovies(movies.map(movieMap => movieMap.id === movie.id ? data : movieMap))
  }

  const decreaseStar = async(movie) => {
    const newRating = movie.stars - 1;
    const {data} = await axios.put(`/api/movies/${movie.id}`, {name: movie.name, stars: newRating})
    setMovies(movies.map(movieMap => movieMap.id === movie.id ? data : movieMap))
  }

  const deleteMovie = async (movie) => {
    await axios.delete(`/api/movies/${movie.id}`);
    setMovies(movies.filter(movieFilt => movieFilt.id !== movie.id ))
  }

  return (
    <ul>
    {
      movies.map(movie => {
        return <li key={movie.id}>
          <h2>{movie.name}</h2>
         <span/> <h5>Rating: {movie.stars} stars <span/>
         
         <button onClick={() => decreaseStar(movie)}>
          -
          </button>
          
          <button onClick={() => increaseStar(movie)}>
            +
            </button></h5>
         <button onClick={() => deleteMovie(movie)}>Delete</button>
        </li>
      })
    }
  </ul>
  )
}

export default MoviesList;