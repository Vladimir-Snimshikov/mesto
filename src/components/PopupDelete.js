import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._submitHandler = null;
  }

  setSubmitAction(action) {
    this._submitHandler = action;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitHandler();
    });
    super.setEventListeners();
  }
}
