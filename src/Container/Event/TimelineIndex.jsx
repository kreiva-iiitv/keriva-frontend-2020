import React from "react";
import Footer from "../../Component/Footer";
import Navigation from "../../Component/Navigation";
import Timeline from '../../Component/Events/Timeline/Timeline'
import EventHeader from "../../Component/Events/EventHeader/EventHeader";


class TimelineIndex extends React.Component{

	state={
		events: "",
	}


	async componentDidMount(){
		try{
			const response = await fetch(`https://gaurkrishna.pythonanywhere.com/event/`);
			const responseJSON = await response.json();
			console.log(responseJSON);
			this.setState({events: responseJSON.Events})
		}catch(error){
			console.log(error);
		}


	}

	render(){
		// console.log(this.state);
		return(
	    <React.Fragment>
	      <Navigation />
	      <EventHeader timeline={true}/>
	      <Timeline events={this.state.events}/>
	      <Footer />
	    </React.Fragment>
		);
	}
}

export default TimelineIndex;