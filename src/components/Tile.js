// A video tile

import React, { useState } from 'react'
import './Tile.css'

// const title = "Paddington 2"
// const rating = "PG"

const Tile = (props) => {
    const [liked, setLiked] = useState(false)
    return (
        <div className="movie-tile">
            <p>Play</p>
            <p>{ liked && "THUMB"}</p>
            <button onClick={() => {
                setLiked(true)
            }}>CLICK</button>
            <p>{ props.title }</p>
            <p>{ props.rating }</p>
            <p>{ props.rating === "VIN DIESEL" ? 'WARNING!' : '' }</p>
            <p>Heartfelt - Exciting - Children & Family - Nima</p>
        </div>
    )
}

export default Tile


// 1. Build out the single tile component
// 1b. Conditional rendering
// 2. Row component (rendering a list of things)

// 3. State