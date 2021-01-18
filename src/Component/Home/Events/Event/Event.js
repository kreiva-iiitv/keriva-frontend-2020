import React from 'react';
import './Event.css';
import { Slide, Image } from 'pure-react-carousel';

const event = (props) => {
	return (
		<Slide className="Event" index={props.index}>
			<div className="Event-section__card">
				<div className={props.index === props.slide ? "imgDiv" : "imgDivSmall"} >
					<Image alt="img" src={props.imgSrc} draggable="false" />
				</div>
				<div className={props.index === props.slide ? "text" : "textSmall"}>
					<div className={props.index === props.slide ? "title" : "titleSmall"}>{props.title}</div>
					<div className={props.index === props.slide ? "prize" : "prizeSmall"}>{`Prizes worth ${props.prize}k`}</div>
				</div>
			</div>

			<div className="Event-section__card--mobile">
				<div className="imgDiv--mobile">
					<Image alt="img--mobile" src={props.imgSrc} draggable="false" />
				</div>
				<div className="text--mobile">
					<div className="title--mobile">{props.title}</div>
					<div className="prize--mobile">{`Prizes worth ${props.prize}k`}</div>
				</div>
			</div>
		</Slide>
	);
}


export default event;