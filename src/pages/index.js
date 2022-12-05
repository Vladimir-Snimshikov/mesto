import './index.css';
import { initialCard,
    buttonAddCard, formSelectors,
    formEdit, formAdd,
    blankCard, buttonEditProfile,
    buttonUpdateProfile}
    from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js'


const formEditProfileValidator = new FormValidator(formSelectors, formEdit);
formEditProfileValidator.enableValidation();

const formAddCardValidator = new FormValidator(formSelectors, formAdd);
formAddCardValidator.enableValidation();

const popupLargeImage = new PopupWithImage('.popup_type_large-picture');
popupLargeImage.setEventListeners();


function createCard(data) {
  const newCard = new Card({data, templateSelector:blankCard,
     handleCardClick: (data) => {
      popupLargeImage.open(data);
  }});
  const cardElement = newCard.getCardElement();

  return cardElement;
}

const cardList = new Section({
  items: initialCard,
  renderer: (data) => {
    cardList.addItem(createCard(data))
  },
  containerSelector: '.cards'
});

cardList.renderItems();


const userInfo = new UserInfo({
  userNameSelector: '.profile__name',
  userProfessionSelector: '.profile__profession',
  userAvatarSelector:'.profile__img'});

const popupEditProfile = new PopupWithForm ({
  popupSelector: '.popup_type_edit-profile',
  handleFormSubmit: (formValues) => {
    console.log(formValues);

    userInfo.setUserInfo(formValues);
  }});


  popupEditProfile.setEventListeners();

  const popupAddCard = new PopupWithForm({
    popupSelector: '.popup_type_new-card',
    handleFormSubmit: (data) => {
      cardList.addItem(createCard(data));
    }
  });



  popupAddCard.setEventListeners();

  buttonAddCard.addEventListener('click', () =>{
    popupAddCard.open();
    formAddCardValidator.hideErrors()
  });

  buttonEditProfile.addEventListener('click', () =>{
    popupEditProfile.setInputValues(userInfo.getUserInfo());
    popupEditProfile.open();
    formEditProfileValidator.hideErrors()
  });


  const popupUpdateAvatar = new PopupWithForm ({
    popupSelector: '.popup_type_avatar-update',
    handleFormSubmit: (formValues) => {

      console.log(formValues);
    }});

    buttonUpdateProfile.addEventListener('click', () => {
      popupUpdateAvatar.setEventListeners()
      popupUpdateAvatar.open()

    })




/*
    const config = {
      url: "https://mesto.nomoreparties.co/v1/cohort-54",
      headers: {
        "Content-Type": "application/json",
        Authorization: "b9863cd1-287b-423d-99c8-b51e7726ff28",
      },
    }; */


    const config = {
      url: "https://mesto.nomoreparties.co/v1/cohort-54/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "b9863cd1-287b-423d-99c8-b51e7726ff28",
      },
    };



    const api = new Api(config);

const bla = {
  link:'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  name:'sdad'
}

api.addCard(bla)
.then((res)=> {
  console.log(res)
})
