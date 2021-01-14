import React from 'react';
import Member from '../../Component/Members/Member/Member';
import Navbar from '../../Component/Members/Navbar/Navbar';
import './Members.css';
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";

class Members extends React.Component{

	state={

	};

	render(){
		const a =[1,2,3,4,5,6,7]
		const members = a.map((q)=><Member/>)
		return(
			<React.Fragment>
				<Header/>
				<Navbar/>
				<div className="members">
					{members}
				</div>
				<Footer/>
			</React.Fragment>
			)
	}
}

export default Members;