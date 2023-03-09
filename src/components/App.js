import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup';
import api from '../utils/api.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState({})


  React.useEffect(() => {
    api.getUserData()
      .then(res => {
        setCurrentUser(res)
          })
      .catch((err) => {
        console.log("Ошибочкa с юзером")
      })
  }, [])




  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }
  const handleCardClick = (card) => {

    setSelectedCard(card)
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(null)
  }

  return (
       <div className="app">
         <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name={'user-avatar'}
        title={'Редактировать аватар'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input type="url" id="avatar" placeholder="Ссылка на аватар" class="popup__input popup__input_type_url" required />
        <span id="avatar-error" class="error"></span>
      </PopupWithForm>

      <PopupWithForm
        name={'user-info'}
        title={'Редактировать профиль'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" id="name" placeholder="Имя" className="popup__input popup__input_type_name" required
          minLength="2" maxLength="40" />
        <span id="name-error" class="error"></span>
        <input type="text" id="about" placeholder="Работа" className="popup__input popup__input_type_about" required
          minLength="2" maxLength="200" />
        <span id="about-error" class="error"></span>
      </PopupWithForm>

      <PopupWithForm
        name={'user-image'}
        title={'Новое место'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" id="pic" placeholder="Название" className="popup__input popup__input_type_place" required
          minLength="2" maxLength="30" />
        <span id="pic-error" class="error"></span>
        <input type="url" id="link" placeholder="Ссылка на картинку" className="popup__input popup__input_type_url"
          required />
        <span id="link-error" class="error"></span>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onclose={closeAllPopups}
      />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
