import React from 'react'
import data from '../../../data/events.json'
import EventCard from './EventCard'
import './CardContainer.css'

function CardContainer() {

    const list = data.events.map((event)=>{
        return <EventCard head = {event.header} desc={event.desc} details= {event.details}/>
    })

    return (
        <div className="CardContainer">
            {list}
        </div>
    )
}

export default CardContainer


