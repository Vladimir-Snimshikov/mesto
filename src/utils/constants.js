export const buttonEditProfile = document.querySelector('.profile__edit-button');  //кнопка редак-ия профиля
export const buttonUpdateProfile = document.querySelector('.profile__avatar-button');  //кнопка редак-ия профиля
export const overlayEditProfile = document.querySelector('.popup_type_edit-profile'); //Оверлей для редактирования
export const overlayNewCard = document.querySelector('.popup_type_new-card'); //Оверлей для доб карточки
export const overlayLargeImg = document.querySelector('.popup_type_large-picture'); //Оверлей для увеличения картинки
export const overlayConfirmation = document.querySelector('.popup_type_confirmation'); //Оверлей для увеличения картинки
export const overlayAvatarUpdate = document.querySelector('.popup_type_avatar-update'); //Оверлей для увеличения картинки
export const nameInput = document.querySelector('.popup__input_type_firstname');  //Интуп для имени при редак-ии профиля
export const professionInput = document.querySelector('.popup__input_type_profession');  //Инпут для проффессии при редак-ии профиля
export const inputNameCard = document.querySelector('.popup__input_type_name-img'); // Интпут для имени при добавлении карточек
export const inputImgCard = document.querySelector('.popup__input_type_img');  // Инпут для адреса картинки при добавлении
export const nameProfile = document.querySelector('.profile__name'); // Имя профиля на странице
export const professionProfile = document.querySelector('.profile__profession'); // Проффессия на странице
export const formEdit = document.forms.editForm; // форма для редактирования профиля
export const formAdd = document.forms.addForm;  // форма для добавления карточки
export const formAvatarUpdate = document.forms.avatarUpdateForm; // форма для редактирования профиля
export const formConfirmation = document.forms.confirmation;  // форма для добавления карточки

export const blankCard = document.querySelector('.blank-card'); //болванка для карточек
export const cards = document.querySelector('.cards'); // ul  карточек
export const buttonAddCard = document.querySelector('.profile__add-button'); // кнопка добавления карточки
export const imgOverlay = document.querySelector('.large-picture__img'); //Картинка при оверлее с увеличенной картинкой
export const imgSignature = document.querySelector('.large-picture__signature')   //подпись картинки при оверлее с увеличенной картинкой

export const formSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input-span',
  errorClass: 'popup__input-span_type_error'
}

const olimpPark = new URL("../images/olympic-park.jpg", import.meta.url);
const rozaHutor = new URL("../images/roza-hutor.jpg", import.meta.url);
const krasnodar = new URL("../images/krasnodar.jpg", import.meta.url);
const moscow = new URL("../images/moscow.jpg", import.meta.url);
const sochi = new URL("../images/sochi.jpg", import.meta.url);
const stPet = new URL("../images/Sankt-petersburg.jpg", import.meta.url);


export const initialCard = [
  {
    name: "Роза Хутор",
    link: rozaHutor
  },
  {
    name: "Олимпийский парк",
    link: olimpPark
  },
  {
    name: "Краснодар",
    link: krasnodar
  },
  {
    name: "Москва",
    link: moscow
  },
  {
    name: "Санкт-Петербург",
    link: stPet
  },
  {
    name: "Сочи",
    link: sochi
  }
];

