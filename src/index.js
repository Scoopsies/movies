import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';


const App = ()=> {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async() => {
      const {data} = await axios.get('/api/movies')
      setMovies(data)
    }
    getData()
  },[])

  console.log(movies)


  return (
    <>
      <h1>Movies ({movies.length})</h1>
      <h2>testing git</h2>
      <ul>
        {
          movies.map(movie => {
            return <li key={movie.id}>{movie.name}</li>
          })
        }
      </ul>
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
