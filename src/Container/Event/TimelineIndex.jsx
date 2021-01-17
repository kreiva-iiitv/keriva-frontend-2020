import React, { useState, useEffect } from 'react'
import Footer from "../../Component/Footer";
import Navigation from "../../Component/Navigation";
import Timeline from '../../Component/Events/Timeline/Timeline'
import EventHeader from "../../Component/Events/EventHeader/EventHeader";


const TimelineIndex = () => {

	const [events, setEvents] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function fetchAPI() {
			setIsLoading(true);
			const res = await fetch('https://gaurkrishna.pythonanywhere.com/event/');
			const data = await res.json()
			setEvents(data.Events);
			setIsLoading(false);
		}
		fetchAPI()
	}, [])

	return (
		<React.Fragment>
			<Navigation />
			<EventHeader timeline={true} />
			{
				isLoading ?
					<div className="CardContainer">
						<div className="lds-facebook">
							<div></div><div></div><div></div>
						</div>
					</div> :
					<Timeline events={events} />
			}
			<Footer />
		</React.Fragment>
	);
}

export default TimelineIndex;
