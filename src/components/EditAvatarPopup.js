import React from "react";

import PopupWithForm from './PopupWithForm';


function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value = '';
  }

  function handeClose() {
    onClose();
    avatarRef.current.value = '';
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={handeClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup-form__input popup-form__input_element_link"
        id="avatar-link-input"
        type="url"
        placeholder="Ссылка на аватар"
        name="avatar-link"
        required
        ref={avatarRef}
      />
      <span className="popup-form__input-error avatar-link-input-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
