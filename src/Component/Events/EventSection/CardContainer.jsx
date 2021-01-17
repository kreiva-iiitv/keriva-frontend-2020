import React, { useState, useEffect } from 'react'
import EventCard from './EventCard'
import './CardContainer.css'
import Fade from 'react-reveal/Fade'

const CardContainer = () => {

    const [EventData, setEventData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchAPI() {
            setIsLoading(true);
            const res = await fetch('https://gaurkrishna.pythonanywhere.com/event/');
            const data = await res.json()
            setEventData(data);
            setIsLoading(false);
        }
        fetchAPI()
    }, [])

    const parseDate = (date) => `${date[5]}${date[6]} Feb 2021`;

    const parseTime = (time) => {
        let period = `AM`;
        let hours = Number(`${time[11]}${time[12]}`);
        const minutes = Number(`${time[14]}${time[15]}`) !== 0 ? Number(`${time[14]}${time[15]}`) : `00`;
        if (hours > 12) {
            hours = hours - 12;
            period = `PM`
        }
        else if (hours === 0) {
            hours = 12;
        }
        return (`${hours}:${minutes} ${period}`)

    }

    const list = EventData ? EventData.Events.map((event, i) => {
        if (i % 2) {
            return <div className="animation_Event"><Fade left><EventCard key={i} rules={event.rules_doc} insta={event.instagram} fb={event.facebook} email={event.email} poster={event.poster} head={event.name} desc={event.long_description} prize={event.prize} venue={event.venue} startD={parseDate(event.start_time)} startT={parseTime(event.start_time)} endD={parseDate(event.end_time)} endT={parseTime(event.end_time)} convenor={event.Convener} coConvenor={event.coConvener} committeCordinator={event.committeeCoordinator} googleLink={event.google_form_link} /></Fade></div>
        } else {
            return <div className="animation_Event"><Fade right><EventCard key={i} rules={event.rules_doc} insta={event.instagram} fb={event.facebook} email={event.email} poster={event.poster} head={event.name} desc={event.long_description} prize={event.prize} venue={event.venue} startD={parseDate(event.start_time)} startT={parseTime(event.start_time)} endD={parseDate(event.end_time)} endT={parseTime(event.end_time)} convenor={event.Convener} coConvenor={event.coConvener} committeCordinator={event.committeeCoordinator} googleLink={event.google_form_link} /></Fade></div>
        }
    }) : null

    return (
        <div className="CardContainer">
            {
                isLoading ?
                    <div className="lds-facebook">
                        <div></div><div></div><div></div>
                    </div>
                    : list
            }
        </div>
    )
}

export default CardContainer


