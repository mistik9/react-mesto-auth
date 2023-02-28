

import '../index.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'

function App({ handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick }) {

  return (
    <div className="app">
<Header />
<Main  />
<PopupWithForm />
      <section className="popup" id="popup_image">
        <div className="popup__container popup__container_image">
          <button className="popup__close" type="button"></button>
          <img className="popup__image" src="#" alt="alt"/>
          <p className="popup__discription"></p>
        </div>
      </section>
<Footer />
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
