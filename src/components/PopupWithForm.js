import React from "react";
import App from "./App";



function PopupWithForm({name, title}) {
   

    return (
        
        <section className="popup" id={name}>
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <h2 className="popup__title">{title}</h2>
          <form className="popup__content">
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
          </form>
        </div>
      </section>
    
    )
}

export default PopupWithForm;