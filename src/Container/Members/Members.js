import React from 'react';
import Member from '../../Component/Members/Member/Member';
import Navbar from '../../Component/Members/Navbar/Navbar';
import './Members.css';
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";

class Members extends React.Component{

	state={
		teams: "",
		currentTab: 0,
	};


	changeCurrentTab = (tab)=>{
		this.setState({currentTab: tab});
	}


	async componentDidMount(){
		try{
			const response = await fetch(`https://gaurkrishna.pythonanywhere.com/team/`);
			const responseJSON = await response.json();
			this.setState({teams: responseJSON.Team});
		}catch(error){
			console.log(error);
		}
	}

	render(){
		// console.log(this.state.teams);
		const teamNames = this.state.teams!==""?this.state.teams.map((team)=>team.name):null;
		const CurrentTabMembers = this.state.teams!==""?this.state.teams[this.state.currentTab].teamMembers.map(
									(member)=><Member imgSrc={member.profilepic}
													  name = {`${member.first_name} ${member.last_name}`}
													  position = {member.role}
													  linkedIn = {member.linkedIn}/>):null;
		return(
			<React.Fragment>
				<Header/>
				<Navbar teamNames={teamNames} currentTab = {this.state.currentTab} changeCurrentTab = {this.changeCurrentTab}/>
				<div className="members">
					{CurrentTabMembers}
				</div>
				<Footer/>
			</React.Fragment>
			)
	}
}

export default Members;