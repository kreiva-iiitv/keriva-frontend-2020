import React from 'react';
import './Member.css';
import "font-awesome/css/font-awesome.min.css";
import  g1 from "../../../Assets/Images/Elon.jpg";

const Member = (props)=>{

	return(
		<div className="member">
			<div className="member__card__border">
			</div>
			<div className="member__card">
				<div className="member__card__image">
					<img className="member__card__image__img" src={g1}/>
				</div>

				<div className="member__card__details">
					<div className="member__card__details__text">
						<div className="member__card__details__text__name">
							<span>ENTER NAME</span>
						</div>

						<div className="member__card__details__text__position">
							<span>Enter Position</span>
						</div>
					</div>

					<hr className="member__card__hr"/>

					<div className="member__card__links">

						<div>
							<div className="fa fa-instagram member__card__links__instagram"></div>
						</div>

						<div>
							<div className="fa fa-github member__card__links__github"></div>
						</div>

						<div>
							<div className="fa fa-linkedin member__card__links__linkedin"></div>
						</div>

					</div>
				</div>
			</div>
		</div>
		)
}

export default Member;