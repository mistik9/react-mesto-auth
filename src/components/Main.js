import React from "react";
import App from "./App";
import add from '../images/add.svg'


function Main() {
   
    function handleEditProfileClick() {
        console.log(popupProfile);
        const popupProfile = document.querySelector('.popup_type_user-info');
        popupProfile.classlist.add('popup_opened');
        
    }
    function handleEditAvatarClick() {
        const popupAvatar = document.querySelector('.popup_type_user-avatar');
        popupAvatar.classlist.add('popup_opened');
        console.log(popupAvatar);
    }
    function handleAddPlaceClick() {
        const popupImage = document.querySelector('.popup_type_add-image');
        popupImage.classlist.add('popup_opened');
        console.log(popupImage);
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <button
                        className="profile__edit-avatar-button"
                        type="button"
                        aria-label="Edit avatar"
                        onClick={handleEditAvatarClick}>
                    </button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__info-name">Жак-Ив Кусто </h1>
                    <button
                        className="profile__edit-button"
                        type="button"
                        aria-label="Edit profile"
                        onClick={handleEditProfileClick}>
                    </button>
                    <p className="profile__info-about">Исследователь океана</p>
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    onClick={handleAddPlaceClick}>
                    <img src={add} alt="кнопка добавить" /></button>
            </section>
            <section className="elements">
                <ul className="elements__container">
                </ul>
            </section>

        </main>

    )
}

export default Main;