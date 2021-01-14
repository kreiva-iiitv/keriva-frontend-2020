import React from 'react';
import './Event.css';
import { Slide, Image } from 'pure-react-carousel';

const event = (props) => {
	return (
		<Slide className="Event" index={props.index}>
			<div>
				<div className={props.index === props.slide ? "imgDiv" : "imgDivSmall"} >
					<Image alt="img" src="https://dummyimage.com/500x500/37053b/000000.png&text=+" draggable="false" />
				</div>
				<div className={props.index === props.slide ? "text" : "textSmall"}>
					<div className={props.index === props.slide ? "title" : "titleSmall"}>{props.title}</div>
					<div className={props.index === props.slide ? "prize" : "prizeSmall"}>{`Prizes worth ${props.prize}k`}</div>
				</div>
			</div>
		</Slide>
	);
}


export default event;