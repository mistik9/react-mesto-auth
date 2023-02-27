import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="page">
  <header className="header">
    <img src="<%=require('./images/logo.svg')%>" alt="лого" className="header__logo"/>
  </header>
  <main className="content">
    <section className="profile">
      <div className="profile__avatar">
        <button className="profile__edit-avatar-button" type="button" aria-label="Edit avatar"></button>
      </div>
      <div className="profile__info">
        <h1 className="profile__info-name">Жак-Ив Кусто </h1>
        <button className="profile__edit-button" type="button" aria-label="Edit profile"></button>
        <p className="profile__info-about">Исследователь океана</p>
      </div>
      <button className="profile__add-button" type="button"><img src="<%=require('./images/add.svg')%>"
          alt="кнопка добавить"/></button>
    </section>
    <section className="elements">
      <ul className="elements__container">
      </ul>
    </section>
  </main>
  <section className="popup" id="popup_profile">
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
  <section className="popup" id="popup_add">
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
  <section className="popup" id="popup_image">
    <div className="popup__container popup__container_image">
      <button className="popup__close" type="button"></button>
      <img className="popup__image" src="#" alt="alt"/>
      <p className="popup__discription"></p>
    </div>
  </section>
  <section className="popup" id="popup_delete">
    <div className="popup__container popup__container_delete">
      <button className="popup__close" type="button"></button>
      <h2 className="popup__title">Вы уверены?</h2>
      <form className="popup__content">
        <button className="popup__save" type="submit">Да </button>
      </form>
    </div>
  </section>
  <section className="popup" id="popup_avatar">
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
  <footer className="footer">
    <p className="footer__copyright">© 2020 Mesto Russia</p>
  </footer>
  <template id="element-template">
    <li className="element">
      <button className="element__delete" type="button"></button>
      <img className="element__image" src="src" alt="alt"/>
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
