

import '../index.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import PopupImage from './PopupImage';

function App() {


const closeAllPopups =() => {
document.classlist.remove('popup_opened')
}

  return (
    <div className="app">
      <Header />
      <Main
        // onEditProfile={handleEditProfileClick}
        // onAddPlace={handleAddPlaceClick}
        // onEditAvatar={handleEditAvatarClick}
        // onCardClick={handleCardClick}
      />
      {/* <PopupWithForm
      name={'user-avatar'}
      title={'Редактировать аватар'}

          />
    <PopupWithForm
      name={'user-info'}
      title={'Редактировать профиль'}

          />
            <PopupWithForm
      name={'user-image'}
      title={'Новое место'}

          /> */}
          <div>
          <section className="popup popup_type_user-info" >
    <div className="popup__container">
      <button className="popup__close" type="button"></button>
      <h2 className="popup__title">Редактировать профиль</h2>
      <form className="popup__content">
        <input type="text" id="name" placeholder="Имя" className="popup__input popup__input_type_name" required
          minlength="2" maxlength="40"/>
        <span id="name-error" className="error"></span>
        <input type="text" id="about" placeholder="Работа" className="popup__input popup__input_type_about" required
          minlength="2" maxlength="200"/>
        <span id="about-error" className="error"></span>
        <button className="popup__save" type="submit">
          Сохранить
        </button>
      </form>
    </div>
  </section>
  <section className="popup popup_type_add-image">
    <div className="popup__container">
      <button className="popup__close" type="button"></button>
      <h2 className="popup__title">Новое место</h2>
      <form className="popup__content">
        <input type="text" id="pic" placeholder="Название" className="popup__input popup__input_type_place" required
          minlength="2" maxlength="30"/>
        <span id="pic-error" className="error"></span>
        <input type="url" id="link" placeholder="Ссылка на картинку" className="popup__input popup__input_type_url"
          required/>
        <span id="link-error" className="error"></span>
        <button className="popup__save popup__save_invalid" type="submit">
          Сохранить
        </button>
      </form>
    </div>
  </section>
  <section className="popup popup_type_show-image">
    <div className="popup__container popup__container_image">
      <button className="popup__close" type="button"></button>
      <img className="popup__image" src="#" alt="alt"/>
      <p className="popup__discription"></p>
    </div>
  </section>
  <section className="popup popup_type_delete-image" >
    <div className="popup__container popup__container_delete">
      <button className="popup__close" type="button"></button>
      <h2 className="popup__title">Вы уверены?</h2>
      <form className="popup__content">
        <button className="popup__save" type="submit">Да </button>
      </form>
    </div>
  </section>
  <section className="popup popup_type_user-avatar" >
    <div className="popup__container">
      <button className="popup__close" type="button"></button>
      <h2 className="popup__title">Обновить аватар</h2>
      <form className="popup__content">
        <input type="url" id="avatar" placeholder="Ссылка на аватар" className="popup__input popup__input_type_url" required/>
        <span id="avatar-error" className="error"></span>
        <button className="popup__save popup__save_invalid" type="submit">
          Сохранить
        </button>
      </form>
    </div>
  </section>
  </div>
    
      <Footer />
      <template id="element-template">
        <li className="element">
          <button className="element__delete" type="button"></button>
          <img className="element__image" src="src" alt="alt" />
          <div className="element__bottom">
            <p className="element__bottom-title"></p>
            <div className="element__bottom-like-container">
              <button className="element__bottom-like" type="button"></button>
              <span className="element__bottom-like-counter"></span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
