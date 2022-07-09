import React from 'react';

import api from "../utils/Api";
import Card from './Card';

function Main(props) {
  const [userName, setUsername] = React.useState('');
  const [userDescription, setDescription] = React.useState('');
  const [userAvatar, setAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then(userInfo => {
      setUsername(userInfo.name);
      setDescription(userInfo.about);
      setAvatar(userInfo.avatar);
    })
  }, []);

  React.useEffect(() => {
    api.getCards()
    .then(cards => {
      setCards(cards);
    })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} >
          <button className="profile__avatar-button" type="button" aria-label="Редактировать аватар" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__description">{userDescription}</p>
          <button className="profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить новое место" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card, i) => (
            <Card key={i} card={card} onCardClick={props.onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
