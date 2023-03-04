function ImagePopup({ card, onclose }) {

  return (
    <section className={`popup popup_type_show-image ${card ? 'popup_opened' : ''}`} >
      <div className="popup__container popup__container_image">
        <button className="popup__close" type="button" onClick={onclose}></button>
        <img className="popup__image" src={card ? card.link : ''} alt={card ? card.name : ''} />
        <p className="popup__discription">{card ? card.name : ''}</p>
      </div>
    </section>
  )
}

export default ImagePopup;