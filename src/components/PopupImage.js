import React, { Children } from "react";




function PopupImage() {


  return (
<section className="popup" id="popup_image">
        <div className="popup__container popup__container_image">
          <button className="popup__close" type="button"></button>
          <img className="popup__image" src="#" alt="alt"/>
          <p className="popup__discription"></p>
        </div>
      </section>
    
  )
}

export default PopupImage;