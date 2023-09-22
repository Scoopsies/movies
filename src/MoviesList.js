import React, {useState, useEffect} from 'react'
import axios from 'axios'


const MoviesList = ({movies, setMovies}) => {
  const [error, setError] = useState(null)
  
  const increaseStar = async(movie) => {
    try {
      const newRating = movie.stars + 1;
      const {data} = await axios.put(`/api/movies/${movie.id}`, {name: movie.name, stars: newRating})
      setMovies(movies.map(movieMap => movieMap.id === movie.id ? data : movieMap))
    
    } catch (err) {
      console.log(err.response.data)
      setError(err.response.data)
    }
  }

  const decreaseStar = async(movie) => {
    try {
      const newRating = movie.stars - 1;
      const {data} = await axios.put(`/api/movies/${movie.id}`, {name: movie.name, stars: newRating})
      setMovies(movies.map(movieMap => movieMap.id === movie.id ? data : movieMap))  
    } catch (error) {
      setError(err.response.data)
    }
  }

  const deleteMovie = async (movie) => {
    await axios.delete(`/api/movies/${movie.id}`);
    setMovies(movies.filter(movieFilt => movieFilt.id !== movie.id ))
  }

  return (
    <div>
      {error ? <h4>{error}</h4> : null}
      <ul>
      {
        movies.map(movie => {
          return <li key={movie.id}>
            <h2>{movie.name}</h2>
           <span/> <h5>Rating: {movie.stars} stars <span/>
      
           <button disabled={movie.stars <= 1} onClick={() =>{
              setError(null)
              decreaseStar(movie)}}> - </button>
      
            <button disabled={movie.stars >= 5} onClick={() => {
              setError(null)
              increaseStar(movie)}}> + </button></h5>

           <button onClick={() => deleteMovie(movie)}>Delete</button>
          </li>
        })
      }
        </ul>
    </div>
  )
}

export default MoviesList;