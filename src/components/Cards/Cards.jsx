import React from 'react'
import './Cards.css'

const Cards = (props) => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${props.monster.id}?set=set3&size=180x180`} alt="monster" />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Cards