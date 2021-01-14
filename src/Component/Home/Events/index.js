import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Event from './Event/Event.js'
import './Events.css'

class Events extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 1,
		}
	};

	changeCurrentSlideNext() {
		if (this.state.currentSlide < this.props.events.length - 2) {
			const currentSlide = this.state.currentSlide + 1;
			this.setState({ currentSlide: currentSlide });
		}
		else {
			this.setState({ currentSlide: 1 });

		}
	}

	changeCurrentSlideBack() {
		// console.log(this.state)
		if (this.state.currentSlide > 1) {
			const currentSlide = this.state.currentSlide - 1;
			this.setState({ currentSlide: currentSlide });
			// console.log(this.state.currentSlide);
		}
		else {
			this.setState({ currentSlide: this.props.events.length - 2 });
		}
	}

	render() {
		const eventList = this.props.events.map((event, i) => <Event title={event.title} prize={event.prize} index={i} slide={this.state.currentSlide} />);
		return (
			<div>
				<div>
					<h1 className="EventsHead">Events</h1>
				</div>
				<div className="CarouselParent">
					<CarouselProvider
						naturalSlideWidth={1}
						naturalSlideHeight={1.2}
						totalSlides={this.props.events.length}
						visibleSlides={3}
						infinite={true}
						dragEnabled={false}
						touchEnabled={false}
						className="Events"
					>
						<div className="CarouselChildren">
							<ButtonBack className="backButton" onClick={() => { this.changeCurrentSlideBack() }}></ButtonBack>
							<Slider className="Slider">
								{eventList}
							</Slider>
							<ButtonNext className="nextButton" onClick={() => { this.changeCurrentSlideNext() }}></ButtonNext>
						</div>
					</CarouselProvider>
				</div>
			</div>
		);
	}
}

export default Events;