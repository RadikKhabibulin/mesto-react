import logo from '../images/header/logo.svg';

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_place-image ${props.card ? "popup_popup-opened" : ""}`}>
      <div className="popup__image-container">
        <img className="popup__image" src={props.card ? props.card.link : logo} alt="Место" />
        <h3 className="popup__image-title">{props.card ? props.card.name : 'Mesto'}</h3>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть изображение"
          onClick={props.onClose}>
        </button>
      </div>
    </div>
  );
}

export default ImagePopup;
