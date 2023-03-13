import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup';
import api from '../utils/api.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card.js';
import EditProfilePopup from './EditProfilePopup.js';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([]);


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

  const handleCardLike = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    console.log(card)

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.doLike(card.id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => console.log("не лайкнулась"));
  }
  const handleDeleteClick = (card) => {
    const isOwn = card.owner === currentUser._id;
    api.deleteCard(card.id)
      .then((res) => {
        const newCard = cards.filter((item) => item._id !== card._id);
        setCards(newCard);
      })
      .catch((err) => console.log("не удалилась"));
  }

  function handleUpdateUser() {
    api.updateUserData()
    .then((res) => {
      console.log(res)
        setCurrentUser(res);
      })
      .catch((err) => console.log("пользователь не обновился"));
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
          onCardLike={handleCardLike}
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

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

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
