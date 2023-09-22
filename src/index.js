import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import MoviesList from './MoviesList';


const App = ()=> {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async() => {
      const {data} = await axios.get('/api/movies')
      setMovies(data)
    }
    getData()
  },[])

  return (
    <>
      <h1>"The" Horror Movies ({movies.length})</h1>
      <MoviesList movies={movies} setMovies={setMovies}/>
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
