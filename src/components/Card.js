
function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <button className="element__delete" type="button"></button>
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="element__bottom">
        <p className="element__bottom-title">{card.name}</p>
        <div className="element__bottom-like-container">
          <button className="element__bottom-like" type="button"></button>
          <span className="element__bottom-like-counter">{card.likes}</span>
        </div>
      </div>
    </li>

  )
}

export default Card;