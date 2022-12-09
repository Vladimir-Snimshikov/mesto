import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}, summitButtonText) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._form = this._popup.querySelector('.popup__form');
    this._summitButton = this._form.querySelector('.popup__submit-button');
    this._summitButtonText = summitButtonText
  }

  _getInputValues() {
    const formValues = {};

    this._inputList.forEach(input => {
      formValues[input.name] =  input.value;

    });

    return formValues;
  }


  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this.handleFormSubmit(this._getInputValues());

    })

  }

  showLoading (isLoading) {
    if(isLoading) {
      this._summitButton.textContent = 'Сохранение...'
    } else {
      this._summitButton.textContent = this._summitButtonText
    }

  }

  close() {
    this._form.reset();
    super.close();
  }

}


