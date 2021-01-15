import React from 'react';
import './Navbar.css';


const Navbar=(props)=>{
	// console.log(props)
	const NavbarTabs = props.teamNames!==null?props.teamNames.map((name,i)=> 			
		<div className={`members__navbar__tab ${props.currentTab===i?`members__navbar__tab__current`:``}`}
			 onClick={()=>{return props.changeCurrentTab(i)}}>
				<span>{`${name.toUpperCase()} TEAM`}</span>
		</div>
		):null;

	return(
		<div className="members__navbar">

			{NavbarTabs}

		</div>
		);
}

export default Navbar;