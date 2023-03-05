import React from "react";
import add from '../images/add.svg'
import api from '../utils/api.js'
import Card from "./Card";


function Main({ onEditProfile, onAddPlace, onEditAvatar, card, onCardClick }) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserData()
            .then(res => {
                const userName = res.name;
                const userDescription = res.about;
                const userAvatar = res.avatar;
                setUserName(userName);
                setUserDescription(userDescription);
                setUserAvatar(userAvatar);
            })
            .catch((err) => {
                console.log("Ошибочкa с юзером")
            })
    }, [])

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
                <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} >
                    <button
                        className="profile__edit-avatar-button"
                        type="button"
                        aria-label="Edit avatar"
                        onClick={onEditAvatar}>
                    </button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__info-name">{userName} </h1>
                    <button
                        className="profile__edit-button"
                        type="button"
                        aria-label="Edit profile"
                        onClick={onEditProfile}>
                    </button>
                    <p className="profile__info-about">{userDescription}</p>
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