import React from 'react'
import './EventCard.css'
import "font-awesome/css/font-awesome.min.css";

function EventCard(props) {

    return (
        <div className="EventCard">

            <div className="EventCard__image"><img className="imageEvent" alt="poster" src={props.poster} /></div>

            <div className="EventCard__profile">
                <h1 className="EventCard__profile__head">{props.head}</h1>
                <p className="EventCard__profile__para">
                    {props.desc}
                </p>
                <div className="EventCard__profile__container">
                    <table className="EventCard__profile__container__table">
                        <tr className="EventCard__profile__container__table__row">
                            <th className="EventCard__profile__container__table__head">Prize Worth</th>
                            <td className="EventCard__profile__container__table__desc">{props.prize}</td>
                        </tr>
                        <tr className="EventCard__profile__container__table__row">
                            <th className="EventCard__profile__container__table__head">Venue</th>
                            <td className="EventCard__profile__container__table__desc">{props.venue}</td>
                        </tr>
                        <tr className="EventCard__profile__container__table__row">
                            <th className="EventCard__profile__container__table__head">Date and Time</th>
                            <td className="EventCard__profile__container__table__desc">{props.startD} {props.startT} to {props.endD} {props.endT}</td>
                        </tr>
                        <tr className="EventCard__profile__container__table__row">
                            <th className="EventCard__profile__container__table__head">Convenor</th>
                            <td className="EventCard__profile__container__table__desc">{props.convenor.first_name} {props.convenor.last_name} </td>
                        </tr>
                        <tr className="EventCard__profile__container__table__row">
                            <th className="EventCard__profile__container__table__head">Co-Convenor</th>
                            <td className="EventCard__profile__container__table__desc">{props.coConvenor.first_name} {props.coConvenor.last_name}</td>
                        </tr>
                        <tr className="EventCard__profile__container__table__row">
                            <th className="EventCard__profile__container__table__head">Committe-Cordinator</th>
                            <td className="EventCard__profile__container__table__desc">{props.committeCordinator.first_name} {props.committeCordinator.last_name}</td>
                        </tr>
                    </table>
                    <div className="EventCard__profile__container__right">
                        <div className="EventCard__profile__container__right__social" >
                            <ul className="EventCard__profile__container__right__social__list">
                                <li><a style={{ color: 'white' }} target="_blank" rel="noopener noreferrer" href={props.insta}><i className="fa fa-instagram icon"></i></a></li>
                                <li><a style={{ color: 'white' }} target="_blank" rel="noopener noreferrer" href={props.fb}><i className="fa fa-facebook-square icon"></i></a></li>
                                <li><a style={{ color: 'white' }} target="_blank" rel="noopener noreferrer" href={`mailto: ${props.email}`}><i className="fa fa-envelope-square icon"></i></a></li>
                            </ul>
                        </div>
                        <div className="EventCard__profile__container__right__register">
                            <a target="_blank" rel="noopener noreferrer" href={props.googleLink} className="EventCard__profile__container__right__register__button">Register</a>
                        </div>
                    </div>
                </div>
                <div><a style={{ color: 'white' }} target="_blank" rel="noopener noreferrer" href={props.rules}>Rules and regulation</a></div>
            </div>

            <div className="onlyMobile">
                <div className="onlyMobile__hr"></div>
                <div className="onlyMobile__social" >
                    <ul className="onlyMobile__social__list">
                        <li><a style={{ color: 'white' }} target="_blank" rel="noopener noreferrer" href={props.insta}><i className="fa fa-instagram icon"></i></a></li>
                        <li><a style={{ color: 'white' }} target="_blank" rel="noopener noreferrer" href={props.fb}><i className="fa fa-facebook-square icon"></i></a></li>
                        <li><a style={{ color: 'white' }} target="_blank" rel="noopener noreferrer" href={`mailto: ${props.email}`}><i className="fa fa-envelope-square icon"></i></a></li>
                    </ul>
                </div>
                <div className="onlyMobile__register">
                    <a target="_blank" rel="noopener noreferrer" href={props.googleLink} className="onlyMobile__register__button">Register</a>
                </div>
            </div>

        </div>
    )
}

export default EventCard
