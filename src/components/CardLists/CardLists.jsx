import React from 'react'
import './CardLists.css'
import Cards from '../Cards/Cards'

export const CardLists = (props) => {
    // console.log(props)
    return (
        <div className='card-list'>
            {props.monsters.map((monster) => (
                <Cards key={monster.id} monster={monster}/>
            ))}
        </div>
    )
}
