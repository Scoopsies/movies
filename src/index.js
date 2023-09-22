import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import MoviesList from './MoviesList';
import MovieForm from './MovieForm';


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
      <br/>
      <h3>Have a suggestion for a horror movies that starts with the word "The"?</h3>
      <MovieForm movies={movies} setMovies={setMovies} />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
