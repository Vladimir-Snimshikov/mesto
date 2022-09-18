const editButton = document.querySelector('.profile__edit-button');
const exitButton = document.querySelector('.popup__exit-button');
const overlay = document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input_type_firstname');
const professionInput = document.querySelector('.popup__input_type_profession');
const formSubmit = document.querySelector('.popup__submit-button');
const nameProfile = document.querySelector('.profile__name');
const professionProfile = document.querySelector('.profile__profession');
const formPopup = document.querySelector('.popup__container');

const togglePopup = () => {
  overlay.classList.toggle('popup_opened');
}

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  professionProfile.textContent = professionInput.value;
  overlay.classList.remove('popup_opened');
}

editButton.addEventListener('click', () => {
  togglePopup()
})

exitButton.addEventListener('click', () => {
  togglePopup()
  nameInput.value = nameProfile.textContent;
  professionInput.value = professionProfile.textContent;
})











/* function exitPopup (event) {
  const curentPopup =  event.target.closest('.popup__container');
  togglePopup(curentPopup);
 }




 editButton.addEventListener('click', exitPopup)

exitButton.addEventListener('click', () => {
  exitPopup();
  nameInput.value = nameProfile.textContent;
  professionInput.value = professionProfile.textContent;
}) */















formPopup.addEventListener('submit', formSubmitHandler)
