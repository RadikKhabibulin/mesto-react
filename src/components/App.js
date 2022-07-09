import React from 'react';

import '../index.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopup() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        title="Обновить аватар"
        name="edit-avatar"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopup}
        children={
          <>
            <input
              className="popup-form__input popup-form__input_element_link"
              id="avatar-link-input"
              type="url"
              placeholder="Ссылка на аватар"
              name="avatar-link"
              required
            />
            <span className="popup-form__input-error avatar-link-input-error"></span>
          </>
        }
      />
      <PopupWithForm
        title="Редактировать профиль"
        name="edit-profile"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopup}
        children={
          <>
            <input
              className="popup-form__input popup-form__input_element_name"
              id="name-input"
              type="text"
              minLength="2"
              maxLength="40"
              placeholder="Имя"
              name="profile-name"
              required
            />
            <span className="popup-form__input-error name-input-error"></span>
            <input
              className="popup-form__input popup-form__input_element_description"
              id="description-input"
              type="text"
              minLength="2"
              maxLength="200"
              placeholder="О себе"
              name="profile-description"
              required
            />
            <span className="popup-form__input-error description-input-error"></span>
          </>
        }
      />
      <PopupWithForm
        title="Новое место"
        name="add-place"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopup}
        children={
          <>
            <input
              className="popup-form__input popup-form__input_element_title"
              id="card-title-input"
              type="text"
              minLength="2"
              maxLength="30"
              placeholder="Название"
              name="place-title"
              required
            />
            <span className="popup-form__input-error card-title-input-error"></span>
            <input
              className="popup-form__input popup-form__input_element_link"
              id="card-link-input"
              type="url"
              placeholder="Ссылка на картинку"
              name="place-link"
              required
            />
            <span className="popup-form__input-error card-link-input-error"></span>
          </>
        }
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopup}
      />
      <PopupWithForm
        title="Вы уверены?"
        name="delete-place"
        buttonText="Да"
        onClose={closeAllPopup}
      />

    </div>
  );
}

export default App;
