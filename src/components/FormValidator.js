export default class FormValidator {
  constructor(settings, form) {

    this._form = form;
    this._settings = settings;
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);

  }

  enableValidation() {

    this._setEventListeners();
  };

  _setEventListeners() {

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  _checkInputValidity(inputItem) {
    if (!inputItem.validity.valid) {
      this._showInputError(inputItem, inputItem.validationMessage);
    } else {
      this._hideInputError(inputItem);
    }
  };

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  }

  _hideInputError = (inputElement) => {
    inputElement.classList.remove(this._settings.inputErrorClass);
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = '';
  };

  hideErrors() {
    this._inputList.forEach(input => {
      this._hideInputError(input);

    })
  }

  _toggleButtonState() {

    if (this._hasInvalidInput()) {
      this.inactivateSubmit();
    } else {
      this._activateSubmit();
    }
  };

  _activateSubmit() {
    this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled'); //
  }

  inactivateSubmit() {
    this._buttonElement.classList.add(this._settings.inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true); //
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };
}
