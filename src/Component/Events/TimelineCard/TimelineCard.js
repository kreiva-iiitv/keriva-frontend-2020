import React from 'react';
import './TimelineCard.css';


const TimelineCard = (props)=>{

	return(
		<div className="card__container">
			<div className = "card">

				<div className = "card__start">
					<div className={(props.currentSlide===props.index)?"card__start__date--bordered":"card__start__date--unbordered"}>
						<span>
							{props.startDate}
						</span>
					</div>
					<hr className={(props.currentSlide===props.index)?"card__start__date-hr--visible":"card__start__date-hr--hidden"}/>

					<div className={(props.currentSlide===props.index)?"card__start__time--bordered":"card__start__time--unbordered"}>
						<span>
							{props.startTime}
						</span>
					</div>
					<hr className={(props.currentSlide===props.index)?"card__start__time-hr--visible":"card__start__time-hr--hidden"}/>

				</div>

				<div className={(props.currentSlide===props.index)?"card__details__border--bordered":"card__details__border--unbordered"}>
					<div className ={(props.currentSlide===props.index)?"card__details--highlighted":"card__details--unhighlighted"} 
						 onMouseEnter={()=>props.onCardMouseEvent(props.index)}
						 onMouseLeave={()=>props.onCardMouseEvent(-1)}>
						<div className="card__details__title">
						<span>{props.title}</span>
						</div>
						<div className="card__details__description">
							{props.description}
						</div>
						<div className="card__details__prize">
							<span>Prize Worth</span>
							<span className="card__details__prize__worth">{props.prize} INR</span>
						</div>
					</div>
				</div>

				<div className="card__end">
					<hr className={(props.currentSlide===props.index)?"card__end__time-hr--visible":"card__end__time-hr--hidden"}/>
					<div className={(props.currentSlide===props.index)?"card__end__time--bordered":"card__end__time--unbordered"}>
						<span>
							{props.endTime}
						</span>
					</div>
					<hr className={(props.currentSlide===props.index)?"card__end__date-hr--visible":"card__end__date-hr--hidden"}/>

					<div className={(props.currentSlide===props.index)?"card__end__date--bordered":"card__end__date--unbordered"}>
						<span>
							{props.endDate}
						</span>
					</div>
				</div>
			</div>
			<div className="card--mobile">
				<div className="card__start--mobile">
					<hr className={(props.currentSlide===props.index)?"card__start__date-hr--mobile--visible":"card__start__date-hr--mobile--hidden"}/>
					<div className={(props.currentSlide===props.index)?"card__start__date--mobile--bordered":"card__start__date--mobile--unbordered"}>
						<span>
							{props.startDate}
						</span>
					</div>

					<hr className={(props.currentSlide===props.index)?"card__start__time-hr--mobile--visible":"card__start__time-hr--mobile--hidden"}/>
					<div className={(props.currentSlide===props.index)?"card__start__time--mobile--bordered":"card__start__time--mobile--unbordered"}>
						<span>
							{props.startTime}
						</span>
					</div>	
					<div className="card__start__title--mobile">
						<span>Start</span>
					</div>
				</div>

				<div className="card__details__wrapper--mobile">
					<hr className="card__details__hr--mobile"/>
					<div className={(props.currentSlide===props.index)?"card__details__border--mobile--bordered":"card__details__border--mobile--unbordered"}>
						<div className ={(props.currentSlide===props.index)?"card__details--mobile--highlighted":"card__details--mobile--unhighlighted"}
																			onMouseEnter={()=>props.onCardMouseEvent(props.index)}
						 													onMouseLeave={()=>props.onCardMouseEvent(-1)}>
							<div className="card__details__title--mobile">
							<span>{props.title}</span>
							</div>
							<div className="card__details__description--mobile">
								{props.description}
							</div>
							<div className="card__details__prize--mobile">
								<span>Prize Worth</span>
								<span className="card__details__prize__worth--mobile">{props.prize} INR</span>
							</div>
						</div>
					</div>
				</div>
				<div className="card__end--mobile">
					<hr className={(props.currentSlide===props.index)?"card__end__date-hr--mobile--visible":"card__end__date-hr--mobile--hidden"}/>
					<div className={(props.currentSlide===props.index)?"card__end__date--mobile--bordered":"card__end__date--mobile--unbordered"}>
						<span>
							{props.endDate}
						</span>
					</div>

					<hr className={(props.currentSlide===props.index)?"card__end__time-hr--mobile--visible":"card__end__time-hr--mobile--hidden"}/>
					<div className={(props.currentSlide===props.index)?"card__end__time--mobile--bordered":"card__end__time--mobile--unbordered"}>
						<span>
							{props.endTime}
						</span>
					</div>	
					<div className="card__end__title--mobile">
						<span>End</span>
					</div>
				</div>

			</div>
		</div>
	)
}

export default TimelineCard;