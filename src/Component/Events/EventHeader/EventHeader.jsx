import React from 'react'
import './EventHeader.css'
import { NavLink } from 'react-router-dom'


function EventHeader(props) {

    const style = props.active ? '3px solid #821169' : null;
    const style2 = props.timeline ? '3px solid #821169' : null;

    return (
        <div className="EventHeader">
            <ul className="EventHeader__list">
                <NavLink className="EventHeader__list__link" to="/events"><li style={{ borderBottom: style }} className="EventHeader__list__item">Events</li></NavLink>
                <NavLink className="EventHeader__list__link" to="/timeline"><li style={{ borderBottom: style2 }} className="EventHeader__list__item">Timeline</li></NavLink>
            </ul>
        </div>
    )
}

export default EventHeader
