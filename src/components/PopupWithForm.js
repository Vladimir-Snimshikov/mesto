import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._form = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] =  input.value;

    });

    return this._formValues;
  }

  setInputValues(UserInfo) {
    this._inputList.forEach((input) => {
      input.value = UserInfo[input.name];
    });
  }


  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this.handleFormSubmit(this._getInputValues());
      this.close();
    })

  }

  close() {
    super.close();
    this._form.reset();

  }

}

