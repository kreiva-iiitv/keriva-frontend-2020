import React from 'react';
import './Member.css';
import "font-awesome/css/font-awesome.min.css";

const Member = (props) => {

	return (
		<div className="member">
			<div className="member__card__border">
			</div>
			<div className="member__card">
				<div className="member__card__image">
					<img className="member__card__image__img" src={props.imgSrc} alt="profile_pic" draggable="false" />
				</div>

				<div className="member__card__details">
					<div className="member__card__details__text">
						<div className="member__card__details__text__name">
							<span>{props.name}</span>
						</div>

						<div className="member__card__details__text__position">
							<span>{props.position}</span>
						</div>
					</div>

					<hr className="member__card__hr" />

					<div className="member__card__links">
						<a href={props.linkedIn}><span className="fa fa-linkedin member__card__links__linkedin"></span></a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Member;