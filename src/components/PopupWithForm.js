function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_popup-opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className={`popup-form popup-form_${props.name}`} name={props.name} method="post">
          {props.children}
          <button className="popup-form__save-button" type="submit" aria-label="Сохранить изменения">{props.buttonText}</button>
        </form>
        <button className="popup__close-button" type="button" aria-label="Закрыть форму" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
