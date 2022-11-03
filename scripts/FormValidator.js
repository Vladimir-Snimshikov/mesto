

export class FormValidator {
  constructor(settings, form) {

    this._form = form;
    this._settings = settings;
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);

  }

  enableValidation() {

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })

    this._setEventListeners();

  };

  _setEventListeners() {

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._CheckInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  _CheckInputValidity(inputItem) {
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

  _toggleButtonState() {

    if (this._hasInvalidInput()) {
      this._inactivateSubmit();
    } else {
      this._activateSubmit();
    }
  };

  _activateSubmit() {
    this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled', true); //
  }

  _inactivateSubmit() {
    this._buttonElement.classList.add(this._settings.inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true); //
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

}
