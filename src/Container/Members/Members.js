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
		return(
			<React.Fragment>
				<Header/>
				<Navbar/>
				<div>
					<Member/>
				</div>
				<Footer/>
			</React.Fragment>
			)
	}
}

export default Members;