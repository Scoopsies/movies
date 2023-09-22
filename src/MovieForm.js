import axios from "axios";
import React, { useState } from "react"


const MovieForm = ({movies, setMovies}) => {
    const [name, setName] = useState('');
    const [stars, setStars] = useState(1);
    
    const postMovie = async (ev) => {
        ev.preventDefault()
        const {data} = await axios.post('/api/movies', {name, stars})
        console.log(data)
        setMovies([...movies, data])
    }
    

  return (
    <form onSubmit={(ev)=> postMovie(ev)}>
        <label>
            Title:
            <input onChange={(ev) => setName(ev.target.value)} type="text"></input>
        </label>
        <br/>
        <label>
            Rating:
            <input onChange={(ev) => setStars(ev.target.value)} min={1} max={5} type="number"></input>
        </label>
        <br/>
        <button>Submit</button>
    </form>
  )
};

export default MovieForm