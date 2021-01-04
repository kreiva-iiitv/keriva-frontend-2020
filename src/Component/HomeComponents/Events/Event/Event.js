import React from 'react';
import './Event.css';
import {Slide, Image} from 'pure-react-carousel';
import image from '../../../../Assets/Images/gallery2.jpg';

const event = (props)=>{
	return(
		<Slide className = "Event" index = {props.index}>
			<div>
				<div className= {props.index===props.slide?"imgDiv": "imgDivSmall"} >
					<Image alt="img" src = {image}/>
				</div>
				<div className={props.index===props.slide?"text": "textSmall"}>
					<div className={props.index===props.slide?"title": "titleSmall"}>{props.title}</div>
					<div className={props.index===props.slide?"prize": "prizeSmall"}>{`Prizes worth ${props.prize}k`}</div>
				</div>
			</div>
		</Slide>
	);
}


export default event;