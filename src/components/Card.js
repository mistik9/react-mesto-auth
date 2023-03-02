




function Card({ card }) {

  return (
    <li className="element">
      <button className="element__delete" type="button"></button>
      <img className="element__image" src={card.link} alt={card.name} />
      <div className="element__bottom">
        <p className="element__bottom-title">{card.name}</p>
        <div className="element__bottom-like-container">
          <button className="element__bottom-like" type="button"></button>
          <span className="element__bottom-like-counter"></span>
        </div>
      </div>
    </li>
  
  )
}

export default Card;