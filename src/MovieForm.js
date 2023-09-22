import axios from "axios";
import React, { useState } from "react"


const MovieForm = ({movies, setMovies}) => {
    const [name, setName] = useState('');
    const [stars, setStars] = useState(1);
    
    const postMovie = async (ev) => {
        ev.preventDefault()
        const {data} = await axios.post('/api/movies', {name, stars})
        setMovies([...movies, data])
        setName('');
        setStars(1)
    }
    

  return (
    <form onSubmit={(ev)=> postMovie(ev)}>
        <label>
            Title:
            <input value={name} onChange={(ev) => setName(ev.target.value)} type="text"></input>
        </label>
        <br/>
        <label>
            Rating:
            <input value={stars} onChange={(ev) => setStars(ev.target.value)} min={1} max={5} type="number"></input>
        </label>
        <br/>
        <button disabled={name.length === 0} >Submit</button>
    </form>
  )
};

export default MovieForm