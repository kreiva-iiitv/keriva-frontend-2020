import React from 'react'
import './EventCard.css'
import "font-awesome/css/font-awesome.min.css";


function EventCard(props) {
    return (
        <div className="card">

            <div className="card__image"></div>

            <div className="card__profile">
                <h1 className="card__profile__head">{props.head}</h1>
                <p className="card__profile__para">
                    {props.desc}
                </p>
                <div className="card__profile__container">
                    <table className="card__profile__container__table">
                        <tr className="card__profile__container__table__row">
                            <th className="card__profile__container__table__head">Prize Worth</th>
                            <td className="card__profile__container__table__desc">{props.details.prizeWorth}</td>
                        </tr>
                        <tr className="card__profile__container__table__row">
                            <th className="card__profile__container__table__head">Venue</th>
                            <td className="card__profile__container__table__desc">{props.details.Venue}</td>
                        </tr>
                        <tr className="card__profile__container__table__row">
                            <th className="card__profile__container__table__head">Date and Time</th>
                            <td className="card__profile__container__table__desc">{props.details.Date}</td>
                        </tr>
                        <tr className="card__profile__container__table__row">
                            <th className="card__profile__container__table__head">Convenor</th>
                            <td className="card__profile__container__table__desc">{props.details.Convenor}</td>
                        </tr>
                        <tr className="card__profile__container__table__row">
                            <th className="card__profile__container__table__head">Co-Convenor</th>
                            <td className="card__profile__container__table__desc">{props.details.CoConvenor}</td>
                        </tr>
                        <tr className="card__profile__container__table__row">
                            <th className="card__profile__container__table__head">Members</th>
                            <td className="card__profile__container__table__desc">{props.details.Members}</td>
                        </tr>
                    </table>
                    <div className="card__profile__container__right">
                        <div className="card__profile__container__right__social" >
                            <ul className="card__profile__container__right__social__list">
                                <li><i className="fa fa-instagram icon"></i></li>
                                <li><i className="fa fa-facebook-square icon"></i></li>
                                <li><i className="fa fa-envelope-square icon"></i></li>
                            </ul>
                        </div>
                        <div className="card__profile__container__right__register">
                            <button className="card__profile__container__right__register__button">Register</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="onlyMobile">
                <div className="onlyMobile__hr"></div>
                <div className="onlyMobile__social" >
                    <ul className="onlyMobile__social__list">
                        <li><i className="fa fa-instagram icon"></i></li>
                        <li><i className="fa fa-facebook-square icon"></i></li>
                        <li><i className="fa fa-envelope-square icon"></i></li>
                    </ul>
                </div>
                <div className="onlyMobile__register">
                    <button className="onlyMobile__register__button">Register</button>
                </div>
            </div>
        </div>
    )
}

export default EventCard
