import React from 'react';
import TimelineCard from '../TimelineCard/TimelineCard';
import './Timeline.css';
import events from './event-details.json';
class Timeline extends React.Component{

	constructor(props){
		super(props);
		this.state={
			currentSlide: -1,
		}
	}

onCardMouseEvent=(slideIndex)=>{
	this.setState({currentSlide:slideIndex});
}

	render(){
		const parseDate=(date)=>`${date[0]}${date[1]}Feb'21`;
		const TimelineCards = events.events.map((event,i)=> <div className="timeline__card">
																<TimelineCard   title={event.title} 
																				description={event.description}
																				prize={event.prize}
																				startDate={parseDate(event.startDate)}
																				endDate={parseDate(event.endDate)}
																				startTime={event.startTime}
																				endTime={event.endTime}
																				currentSlide={this.state.currentSlide}
																				index={i}
																				onCardMouseEvent={this.onCardMouseEvent}
																				/>
																{i<events.events.length-1?(<hr className= "timeline__hr"/>):null}
															</div>);
		return(
			<div className="timeline">
				<div className="timeline__content">
					<div className="timeline__title">
						<div className="timeline__start__title">
							<div>
								<span>Start Date</span>
							</div>
							<div>
								<span>Start Time</span>
							</div>
						</div>
						
						<div className="timeline__end__title">
							<div>
								<span>End Time</span>
							</div>
							<div>
								<span>End Date</span>
							</div>
						</div>
					</div>
					<div className="timeline__cards-wrapper">
						{TimelineCards}
					</div>
				</div>
				<div className="timeline__content--mobile">
					{TimelineCards}
				</div>
			</div>
		);
	}
}


export default Timeline;