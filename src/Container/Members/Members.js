import React, { useState, useEffect } from 'react';
import Member from '../../Component/Members/Member/Member';
import Navbar from '../../Component/Members/Navbar/Navbar';
import './Members.css';
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";

const Members = () => {

	const [teams, setTeams] = useState("");
	const [currentTab, setCurrentTab] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const changeCurrentTab = (tab) => {
		setCurrentTab(tab);
	}

	useEffect(() => {
		async function fetchAPI() {
			setIsLoading(true);
			const res = await fetch('https://kreiva.tk/team/');
			const data = await res.json()
			setTeams(data.Team);
			setIsLoading(false);
			console.log(data.Team)
		}
		fetchAPI()
	}, [])

	const teamNames = teams !== "" ? teams.map((team) => team.name) : null;

	const CurrentTabMembers = teams !== "" ? teams[currentTab].teamMembers.map(
		(member) => <Member imgSrc={member.profilepic}
			name={`${member.first_name} ${member.last_name}`}
			position={member.role}
			linkedIn={member.linkedIn} />) : [];

	return (
		<React.Fragment>
			<Header />
			<Navbar teamNames={teamNames} currentTab={currentTab} changeCurrentTab={changeCurrentTab} />
			<div className="members" style={{justifyContent:CurrentTabMembers.length>2?'center':'unset'}}>
				{
					isLoading ?
						<div className="lds-facebook">
							<div></div><div></div><div></div>
						</div>
						: CurrentTabMembers
				}
			</div>
			<Footer />
		</React.Fragment>
	)
}

export default Members;
