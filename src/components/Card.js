function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <img className="card__image" src={props.card.link} alt="Место" onClick={handleClick}/>
      <div className="card__body">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button
            className="card__like-button"
            type="button"
            aria-label="Поставить лайк">
          </button>
          <p className="card__likes-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button className="card__trash-button card__trash-button_hidden" type="button" aria-label="Удалить карточку"></button>
    </li>
  );
}

export default Card;
