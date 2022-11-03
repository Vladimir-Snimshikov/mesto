import {FormValidator} from './FormValidator.js';
import {Card} from './card.js';
import {initialCard} from './initialCard.js';

const buttonEdit = document.querySelector('.profile__edit-button');  //кнопка редак-ия профиля
const buttonsExit = document.querySelectorAll('.popup__exit-button'); //кнопкИ закрытия попапов
const overlayEditProfile = document.querySelector('.popup_type_edit-profile'); //Оверлей для редактирования
const overlayNewCard = document.querySelector('.popup_type_new-card'); //Оверлей для доб карточки
const overlayLargeImg = document.querySelector('.popup_type_large-picture'); //Оверлей для увеличения картинки
const nameInput = document.querySelector('.popup__input_type_firstname');  //Интуп для имени при редак-ии профиля
const professionInput = document.querySelector('.popup__input_type_profession');  //Инпут для проффессии при редак-ии профиля
const inputNameCard = document.querySelector('.popup__input_type_name-img'); // Интпут для имени при добавлении карточек
const inputImgCard = document.querySelector('.popup__input_type_img');  // Инпут для адреса картинки при добавлении
const nameProfile = document.querySelector('.profile__name'); // Имя профиля на странице
const professionProfile = document.querySelector('.profile__profession'); // Проффессия на странице
const formEdit = document.forms.editForm; // форма для редактирования профиля
const formAdd = document.forms.addForm;  // форма для добавления карточки
const blankCard = document.querySelector('.blank-card'); //болванка для карточек
const cards = document.querySelector('.cards'); // ul  карточек
const buttonAddCard = document.querySelector('.profile__add-button'); // кнопка добавления карточки
const imgOverlay = document.querySelector('.large-picture__img'); //Картинка при оверлее с увеличенной картинкой
const imgSignature = document.querySelector('.large-picture__signature')   //подпись картинки при оверлее с увеличенной картинкой

const formSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input-span',
  errorClass: 'popup__input-span_type_error'
}


const editFormValidator = new FormValidator(formSelectors, formEdit);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(formSelectors, formAdd);
addFormValidator.enableValidation();

const handleCardClick = (name, link) => {
  openPopup(overlayLargeImg);

  imgOverlay.src = link; //
  imgOverlay.alt = name;
  imgSignature.textContent = name;
}


function renderItem(data) {
  const newCard = new Card(data, blankCard, handleCardClick);
  const cardElement = newCard.getCardElement();
  cards.prepend(cardElement)
}


function openPopup(popupName) {  //функция открытия попапа
  popupName.classList.add('popup_opened');

  document.addEventListener('click', closePopupByClick);
  document.addEventListener('keydown', exitByEscape);
}

function closePopup(popupName) {  //функция для закрытия попапа

  popupName.classList.remove('popup_opened');

  document.removeEventListener('click', closePopupByClick);
  document.removeEventListener('keydown', exitByEscape);

}

function closePopupByClick(evt) {

  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  };
};

//функция закрытия по кнопке ест.Находит текущий открытый попап и закрывает его при нажатии на esc
function exitByEscape(evt) {
  if (evt.key === 'Escape') {
    const curentPopup = document.querySelector('.popup_opened');
    closePopup(curentPopup);
  }
}

 //функция отправки формы при редактировании профиля
function editFormSubmitHandler(evt) {

  nameProfile.textContent = nameInput.value;
  professionProfile.textContent = professionInput.value;
  closePopup(overlayEditProfile);
  evt.target.reset();
}

function addFormSubmitHandler(evt) { //функция отправки формы при добавлениии карточки

  const newCard = {
    name: inputNameCard.value,
    link: inputImgCard.value
  }
  renderItem(newCard);
  const curentPopup = document.querySelector('.popup_opened')
  closePopup(curentPopup);
  evt.target.reset();
  addFormValidator._inactivateSubmit();
}


buttonEdit.addEventListener('click', () => { //вешаем слушатель для вызова открытия попапа(нужного) по клику
  nameInput.value = nameProfile.textContent;
  professionInput.value = professionProfile.textContent;
  openPopup(overlayEditProfile);
});

buttonAddCard.addEventListener('click', () => { //вешаем слушатель для вызова открытия попапа(нужного) по клику
  openPopup(overlayNewCard);
});

buttonsExit.forEach((button) => {

  button.addEventListener('click', (evt) => {
    const curentPopup = evt.target.closest('.popup');
    closePopup(curentPopup)
  })
}) //навешиваем слушатели на все кнопки(крестики) и передаем функцию закрытия попапа по клику


initialCard.forEach(item => { renderItem(item) });

formEdit.addEventListener('submit', editFormSubmitHandler);

formAdd.addEventListener('submit', addFormSubmitHandler);

