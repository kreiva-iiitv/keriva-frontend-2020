import React, { Component } from 'react'
import EventCard from './EventCard'
import './CardContainer.css'

class CardContainer extends Component {


    state={
        EventData :null
    }


    componentDidMount(){
        fetch('https://gaurkrishna.pythonanywhere.com/event/').then(res=>res.json())
        .then(data=>{
            this.setState({EventData:data})
        })
    }



    render() {

        const list = this.state.EventData?this.state.EventData.Events.map((event,i)=>{
            return <EventCard key={i} insta={event.instagram} fb={event.facebook} email={event.email} poster={event.poster} head = {event.name} desc={event.long_description} prize={event.prize} venue={event.venue} startD = {event.start_time} endD = {event.end_time} convenor= {event.Convener} coConvenor = {event.coConvener} committeCordinator={event.committeeCoordinator} googleLink={event.google_form_link} />
        }):null

        return (
            <div className="CardContainer">
                {list}
            </div>
        )
    }
}

export default CardContainer


