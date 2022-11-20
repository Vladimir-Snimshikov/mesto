import './index.css';
import { initialCard,
    buttonAddCard, formSelectors,
    formEdit, formAdd,
    blankCard, buttonEditProfile}
    from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js'


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
  userProfessionSelector: '.profile__profession'});

const popupEditProfile = new PopupWithForm ({
  popupSelector: '.popup_type_edit-profile',
  handleFormSubmit: (formValues) => {

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

