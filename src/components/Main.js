import React from "react";
import App from "./App";
import add from '../images/add.svg'


function Main({ handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick }) {
    function handleEditAvatarClick() {
        const popupAvatar = document.querySelector('#popup_avatar');
        popupAvatar.classList.add('.popup_opened');
        console.log(popupAvatar)
    };
    function handleEditProfileClick() {
        const popupProfile = document.querySelector('#popup_profile');
        popupProfile.classList.add('.popup_opened');
    };

    function handleAddPlaceClick() {
        const popupAdd = document.querySelector('#popup_add');
        popupAdd.classList.add('.popup_opened');
    };

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <button
                        className="profile__edit-avatar-button"
                        type="button"
                        aria-label="Edit avatar"
                        onEditAvatar={handleEditAvatarClick}>
                    </button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__info-name">Жак-Ив Кусто </h1>
                    <button
                        className="profile__edit-button"
                        type="button"
                        aria-label="Edit profile"
                        onEditProfile={handleEditProfileClick}>
                    </button>
                    <p className="profile__info-about">Исследователь океана</p>
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    onAddPlace={handleAddPlaceClick}>
                    <img src={add} alt="кнопка добавить"/></button>
            </section>
            <section className="elements">
                <ul className="elements__container">
                </ul>
            </section>

        </main>

    )
}

export default Main;