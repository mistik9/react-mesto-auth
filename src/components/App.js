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

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)
  const [cards, setCards] = React.useState([]);
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

  React.useEffect(() => {
    api.getInitialCards()
      .then(res => {

        const cards = res.map(item => {
          return {
            name: item.name,
            link: item.link,
            likes: item.likes,
            id: item._id,
            owner: item.owner._id
          }
          (cards)
        })
        setCards(cards)
      })
      .catch((err) => {
        console.log("Ошибочка с карточками")
      })
  }, [])


  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    (isLiked ? api.doDislike(card.id) : api.doLike(card.id))
.then((newCard) => {
      setCards((state) => 
      state.map((c) => (c.id === card.id ? newCard : c))

    )
    
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
    api.addNewCard(setCards)
    .then((card) => {
  
      setCards([card, ...card])
    })
    .catch((err) => console.log("карточка не добавлена"));
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
          onCardDelete={handleDeleteClick}
          cards={cards}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace ={handleAddPlace} />
        <ImagePopup card={selectedCard} onclose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
