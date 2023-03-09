import React from "react";
import add from '../images/add.svg'
import api from '../utils/api.js'
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function Main({ onEditProfile, onAddPlace, onEditAvatar, card, onCardClick }) {

    const [cards, setCards] = React.useState([]);

    const currentUser = React.useContext(CurrentUserContext);



    React.useEffect(() => {
        api.getInitialCards()
            .then(res => {
                const cards = res.map(item => {
                    return {
                        name: item.name,
                        link: item.link,
                        likes: item.likes.length,
                        id: item._id
                    }
                })
                setCards(cards)
            })
            .catch((err) => {
                console.log("Ошибочка с карточками")
            })
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} >
                    <button
                        className="profile__edit-avatar-button"
                        type="button"
                        aria-label="Edit avatar"
                        onClick={onEditAvatar}>
                    </button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__info-name">{currentUser.name} </h1>
                    <button
                        className="profile__edit-button"
                        type="button"
                        aria-label="Edit profile"
                        onClick={onEditProfile}>
                    </button>
                    <p className="profile__info-about">{currentUser.about}</p>
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    onClick={onAddPlace}>
                    <img src={add} alt="кнопка добавить" /></button>
            </section>
            <section className="elements">
                <ul className="elements__container">
                    {cards.map((card) => 
                            <Card
                                key={card.id}
                                card={card}
                                src={card.link}
                                title={card.name}
                                like={card.likes}
                                onCardClick={onCardClick} />

                        )
                    }
                </ul>
            </section>

        </main>

    )
}

export default Main;