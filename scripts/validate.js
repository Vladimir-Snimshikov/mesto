const formSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input-span',
  errorClass: 'popup__input-span_type_error'
}


function enableValidation(obj) {
  const formList = document.querySelectorAll(obj.formSelector);
  formList.forEach((form) => {
    setEventListeners(form, obj);
  });
};


function setEventListeners(form, obj) {
  const inputList = Array.from(form.querySelectorAll(obj.inputSelector));
  const buttonElement = form.querySelector(obj.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, obj);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      CheckInputValidity(form, inputElement, obj);
      toggleButtonState(inputList, buttonElement, obj);
    });
  });
};

function showInputError (item, inputElement, errorMessage, obj) {
  const errorElement = item.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(obj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.errorClass);
}

const hideInputError = (item, inputElement, obj) => {
  inputElement.classList.remove(obj.inputErrorClass);
  const errorElement = item.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(obj.errorClass);
  errorElement.textContent = '';
};

function CheckInputValidity(formItem, inputItem, obj) {
  if (!inputItem.validity.valid) {
    showInputError(formItem, inputItem, inputItem.validationMessage, obj);
  } else {
    hideInputError(formItem, inputItem, obj);
  }
};

function activateSubmit (buttonElement, obj) {
  buttonElement.classList.remove(obj.inactiveButtonClass);
  buttonElement.removeAttribute('disabled', true);
}

function inactivateSubmit (buttonElement, obj) {
  buttonElement.classList.add(obj.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
}

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};


function toggleButtonState (inputList, buttonElement, obj) {
  if (hasInvalidInput(inputList)) {
    inactivateSubmit(buttonElement, obj);
  } else {
    activateSubmit(buttonElement, obj);
  }
};


enableValidation(formSelectors);




































































/*
function showInputError (formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.{inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
}

function enableValidation () {
  const formList = Array.from(document.forms);
  formList.forEach(formElement => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
  })
}
 */










/* const formElement = document.querySelector('.popup__form'); // форма
const formInput = document.querySelector(formSelectors.inputSelector);  // инпут
const formError = formElement.querySelector(`.${formInput.id}-error`); // спан элемент конкретного инпута

function showInputError(formElement, inputElement, errorMessage) {

  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formSelectors.inputErrorClass);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(formSelectors.errorClass);
};

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(formSelectors.inputErrorClass);

  errorElement.textContent = '';
  errorElement.classList.remove(formSelectors.errorClass);
};

function isValid(formElement, inputElement) {

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage)
  } else {
    hideInputError(formElement, inputElement);
  }
};


function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(formSelectors.inputSelector));

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonStat(inputList, formSelectors.submitButtonSelector)
    });
  });
};

function enableValidation() {
  const formList = Array.from(document.querySelectorAll(formSelectors.formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement)
  });
};

// проверка интутов на валидность,чтобы передать результат функции отключения кнопки
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function toggleButtonStat (inputList, buttonElement) {

  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formSelectors.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(formSelectors.inactiveButtonClass);
  }
}


enableValidation(); */























































/* const formElement = document.querySelector('.popup__form'); // форма
const formInput = document.querySelector(formSelectors.inputSelector);  // инпут
const formError = formElement.querySelector(`.${formInput.id}-error`); // спан элемент конкретного инпута

function showInputError(formElement, inputElement, errorMessage) {

  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formSelectors.inputErrorClass);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(formSelectors.errorClass);
};

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(formSelectors.inputErrorClass);

  errorElement.textContent = '';
  errorElement.classList.remove(formSelectors.errorClass);
};

function isValid(formElement, inputElement) {

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage)
  } else {
    hideInputError(formElement, inputElement);
  }
};


function setEventListeners (formElement) {
  const inputList = Array.from(formElement.querySelectorAll(formSelectors.inputSelector));

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement)
    })
  });
};

function enableValidation () {
  const formList = Array.from(document.querySelectorAll(formSelectors.formSelector));

  formList.forEach((formElement) => {
    setEventListeners (formElement)
  });
};
enableValidation (); */




