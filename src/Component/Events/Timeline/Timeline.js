import React from 'react';
import TimelineCard from '../TimelineCard/TimelineCard';
import './Timeline.css';
import Fade from 'react-reveal/Fade'
class Timeline extends React.Component{

	constructor(props){
		super(props);
		this.state={
			currentSlide: 0,
		}
	}

onCardMouseEvent=(slideIndex)=>{
	this.setState({currentSlide:slideIndex});
}

	render(){
		// console.log(this.props);
		const parseDate=(date)=>`${date[5]}${date[6]}Feb'21`;

		const parseTime=(time)=>{
			let period = `AM`;
			let hours = Number(`${time[11]}${time[12]}`);
			const minutes = Number(`${time[14]}${time[15]}`)!==0?Number(`${time[14]}${time[15]}`): `00`;
			if(hours>12){
				hours = hours-12;
				period= `PM`
			}
			else if(hours===0){
				hours = 12;
			}
			return(`${hours}:${minutes} ${period}`)
		
		} 

		const TimelineCards = (this.props.events!=="")?
		(this.props.events.map((event,i) => {
			if(i%2){
				return <Fade left><div className="timeline__card">
				<TimelineCard   title={event.name} 
								description={event.long_description}
								prize={event.prize}
								startDate={parseDate(event.start_time)}
								endDate={parseDate(event.end_time)}
								startTime={parseTime(event.start_time)}
								endTime={parseTime(event.end_time)}
								currentSlide={this.state.currentSlide}
								index={i}
								onCardMouseEvent={this.onCardMouseEvent}
								/>

				{i<this.props.events.length-1?(<hr className= "timeline__hr"/>):null}
			</div></Fade>
			}else{
				return <Fade right><div className="timeline__card">
																		<TimelineCard   title={event.name} 
																						description={event.long_description}
																						prize={event.prize}
																						startDate={parseDate(event.start_time)}
																						endDate={parseDate(event.end_time)}
																						startTime={parseTime(event.start_time)}
																						endTime={parseTime(event.end_time)}
																						currentSlide={this.state.currentSlide}
																						index={i}
																						onCardMouseEvent={this.onCardMouseEvent}
																						/>

																		{i<this.props.events.length-1?(<hr className= "timeline__hr"/>):null}
																	</div></Fade>
			}
		})): undefined;
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