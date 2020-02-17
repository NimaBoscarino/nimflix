// A video tile

import React, { useState } from 'react'
import Tile from './Tile'
import './Row.css'


const Row = (props) => {
    const [number, setNumber] = useState(0)

    const [movies, setMovies] = useState([
        {
            title: 'Fast and Furious',
            rating: 'SPEEDY'
        },
        {
            title: 'Fast and Furious 2',
            rating: 'SPEEDY'
        },
        {
            title: 'Fast and Furious 3',
            rating: 'FURIOUS'
        },
        {
            title: 'Fast and Furious 4',
            rating: 'FAST'
        },                               
    ])

    return (
        <div className="movie-row">
            <h1>{ number }</h1>
            <button onClick={() => {
                setNumber(number + 1)
                setMovies([...movies, {
                    title: 'Fast and Furious 5',
                    rating: 'VIN DIESEL'
                }])
            }}>Click</button>
            <h1>{props.title}</h1>
            <div>
                {
                    movies.map(m => <Tile title={m.title} rating={m.rating}/>)
                }
            </div>
        </div>
    )
}

export default Row


// 1. Build out the single tile component
// 1b. Conditional rendering
// 2. Row component (rendering a list of things)

// 3. State