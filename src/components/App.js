import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup';
import api from '../utils/api.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import Register from './Register.js';
import Login from './Login.js';
import auth from '../utils/auth.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({})
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [userData, setUserData] = React.useState({})
  const [loading, setLoading] = React.useState(true)

  const navigate = useNavigate()

  // function cbLogin({ username, password }) {
  //   auth.authorize(username, password)
  //     .then((res) => {
  //       console.log(res)
  //       setLoggedIn(true)
  //       setUserData(res.user)
  //     })
  //     .catch((err) => console.log("Ошибка"))
  //     .finally(
  //       setLoading(false)
  //     )
  // }

  // function cbRegister({ username, password, email }) {
  //   auth.register(username, password, email)
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => console.log("Ошибка"));
  // }

  // function cbTokenCheck() {
  //   if (localStorage.getItem('jwt')) {
  //     const jwt = localStorage.getItem('jwt');
  //     auth.checkToken(jwt).then((res) => {
  //       if (res) {
  //         setLoggedIn(true);
  //         navigate('/main', { replace: true })
  //       }
  //     })
  //   }
  // }

  // function cbLogOut() {
  //   setLoggedIn(false);
  //   setUserData({});
  //   localStorage.removeItem('jwt')
  // }

  // React.useEffect(() => {
  //   Promise.all([api.getUserData(), api.getInitialCards()])
  //     .then(([userData, cardsData]) => {
  //       setCurrentUser(userData)
  //       setCards(cardsData)
  //     })
  //     .catch((err) => {
  //       console.log("Ошибочкa с загрузкой")
  //     })
  // }, [])


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleCardClick(card) {
    setSelectedCard(card)
  }


  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(null)
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    (isLiked ? api.doDislike(card._id) : api.doLike(card._id))
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        )
      })
      .catch((err) => console.log("не лайкнулась"));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then((res) => {
        const newCard = cards.filter((item) => item._id !== card._id);
        console.log(newCard)
        setCards(newCard);
      })
      .catch((err) => console.log("не удалилась"));
  }


  function handleUpdateUser(data) {

    api.updateUserData(data)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups()
      })
      .catch((err) => console.log("пользователь не обновился"));
  }

  function handleUpdateAvatar(data) {
    api.updateAvatar(data)
      .then(res => {
        console.log(res)
        setCurrentUser(res);
        closeAllPopups()
      })
      .catch((err) => console.log("аватар не обновился"));
  }

  function handleAddPlace(data) {
    api.addNewCard(data)
      .then((data) => {
        const newCard = data
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch((err) => console.log("карточка не добавлена"));
  }


  return (


    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="*" element={loggedIn ? <Navigate to="/" /> : <Navigate to="/sign-in" />} />
          <Route path="/" element={<ProtectedRoute loggedIn={loggedIn}>
            <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onDeleteClick={handleCardDelete}
              cards={cards}
            />
          </ProtectedRoute>
          }
          />
        </Routes>
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace} />
        <ImagePopup card={selectedCard} onclose={closeAllPopups} />

      </div>
    </CurrentUserContext.Provider>


  );
}

export default App;
