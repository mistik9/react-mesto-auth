import React, { Children } from "react";




function PopupWithForm({ name, title, children, isOpen, onClose, onEditProfile, onAddPlace, onEditAvatar  }) {


  return (

    <section className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <form className="popup__content" name={name}>
          <button className="popup__close" type="button" onClick = {onclose}></button>
          <h2 className="popup__title">{title}</h2>
          {children}
        </form>

        {/* 
            <input 
            type="text" 
            id="name" 
            placeholder="Имя" 
            className="popup__input popup__input_type_name" 
            required
            minlength="2" 
            maxlength="40"/>
            <span id="name-error" className="error"></span>
            <input 
            type="text" 
            id="about" 
            placeholder="Работа" 
            className="popup__input popup__input_type_about" 
            required
            minlength="2" 
            maxlength="200"/>
            <span id="about-error" className="error"></span>
            <button className="popup__save" type="submit">
              Сохранить
            </button>
            */}

      </div>
    </section>

  )
}

export default PopupWithForm;