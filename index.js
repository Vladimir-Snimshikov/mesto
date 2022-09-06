const editButton = document.querySelector('.profile__edit-button');
const exitButton = document.querySelector('.popup__exit-button');
const overlay = document.querySelector('.popup');
const nameInput = document.querySelector('[name="firstname"]');
const professionInput = document.querySelector('[name="profession"]');
const formSubmit = document.querySelector('.popup__submit-button');
const nameProfile = document.querySelector('.profile__name');
const professionProfile = document.querySelector('.profile__profession');
const formPopup = document.querySelector('.popup__container');


const openPopup = () => {
  overlay.classList.toggle('popup_opened');
}

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  professionProfile.textContent = professionInput.value;
  overlay.classList.remove('popup_opened');
}


editButton.addEventListener('click', () => {
  openPopup()
})

exitButton.addEventListener('click', () => {
  openPopup()
})

formPopup.addEventListener('submit', formSubmitHandler)


























/* const editButton = document.querySelector('.profile__edit-button');
const exitButton = document.querySelector('.popup__exit-button');
const overlay = document.querySelector('.popup');
const nameInput = document.querySelector('[name="firstname"]');
const professionInput = document.querySelector('[name="profession"]');
const formSubmit = document.querySelector('.popup__submit-button');
const nameProfile = document.querySelector('.profile__name');
const professionProfile = document.querySelector('.profile__profession');
const formPopup = document.querySelector('.popup__container');


function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  professionProfile.textContent = professionInput.value;
  overlay.classList.remove('popup_opened');
  console.log(nameProfile);
}

editButton.addEventListener('click', () => {
  overlay.classList.add('popup_opened')
})

exitButton.addEventListener('click', () => {
  overlay.classList.remove('popup_opened')
})
formPopup.addEventListener('submit', formSubmitHandler) */







