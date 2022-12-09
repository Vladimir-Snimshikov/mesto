  import './index.css';
  import {
    buttonAddCard, formSelectors,
    formEdit, formAdd, buttonEditProfile,
    buttonUpdateProfile, config, formAvatarUpdate,
    buttonSubmitFormAvatar, buttonSubmitFormAdd, buttonSubmitFormEdit
  }
    from '../utils/constants.js';

  import Card from '../components/Card.js';
  import FormValidator from '../components/FormValidator.js';
  import PopupWithForm from '../components/PopupWithForm.js';
  import PopupWithImage from '../components/PopupWithImage.js';
  import PopupDelete from '../components/PopupDelete.js';
  import Section from '../components/Section.js';
  import UserInfo from '../components/UserInfo.js';
  import Api from '../components/Api.js'
  import { data } from 'autoprefixer';



  const formEditProfileValidator = new FormValidator(formSelectors, formEdit);
  formEditProfileValidator.enableValidation();

  const formAddCardValidator = new FormValidator(formSelectors, formAdd);
  formAddCardValidator.enableValidation();

  const forUpdateAvatarValidator = new FormValidator(formSelectors, formAvatarUpdate);
  forUpdateAvatarValidator.enableValidation();

  const popupLargeImage = new PopupWithImage('.popup_type_large-picture');
  popupLargeImage.setEventListeners();

  const api = new Api(config);

  const deletePopup = new PopupDelete('.popup_type_confirmation');
  deletePopup.setEventListeners();

  const userInfo = new UserInfo({
    userNameSelector: '.profile__name',
    userProfessionSelector: '.profile__profession',
    userAvatarSelector: '.profile__img'
  });


 //фун-ия создания карточки в которыю мы передадим 3 функции,в которых пропишем поведение при нажатии на элементы карточки
  function createCard(data) {
    const newCard = new Card({
      data, templateSelector: '.blank-card', handleCardClick,
       handleCardDelete, handleClickLike}, userInfo.getId()
    );
    const cardElement = newCard.generateCard();

    return cardElement;
  }

// функционал увеличения картинки при нажатии на карточку
 function handleCardClick (data) {
  popupLargeImage.open(data)
 }
// функционал удаления карточки с запросом
 function handleCardDelete (card) {
  deletePopup.open();

  deletePopup.setSubmitAction(() => {
    api
      .deleteCard(card.getId())
      .then(function () {
        card.delete();
        deletePopup.close();
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
// функционал лайка карточки с запросом. card.isLiked() методом some проверяем массив лайков на собственный лайк
function handleClickLike (card) {
  api
  .toggleLike(card.getId(), card.isLiked())  // выбираем между "DELETE" : "PUT" в зависимости от результата card.isLiked()
  .then((data)=> {
    card.setLikes(data)
  })
  .catch((err)=> {
    console.log(err)
  })
}

  const cardList = new Section({
    renderer: (data) => {
      cardList.addItem(createCard(data))
    },
    containerSelector: '.cards'
  });

  Promise.all([api.getUserInfo(), api.getAllCards()])
  .then(([data, array]) => {
    userInfo.setUserInfo(data);
    userInfo.setAvatarInfo(data);
    cardList.renderItems(array);
  })
  .catch((err)=> {
    console.log(err)
  })


  const editAvatar = new PopupWithForm({
    popupSelector: '.popup_type_avatar-update',
    handleFormSubmit: (inputValues) => {
      buttonSubmitFormAvatar.textContent = "Сохранение...";

      api
        .putAvatar(inputValues)
        .then((data) => {
          userInfo.setAvatarInfo(data);
          editAvatar.close()
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          buttonSubmitFormAvatar.textContent = "Сохранить";
        })
    }
  })
  editAvatar.setEventListeners()


  const popupEditProfile = new PopupWithForm({
    popupSelector: '.popup_type_edit-profile',
    handleFormSubmit: (formValues) => {
      buttonSubmitFormEdit.textContent = "Сохранение...";
      api
        .editProfile(formValues)
        .then((data) => {
          userInfo.setUserInfo(data);
          popupEditProfile.close()
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          buttonSubmitFormEdit.textContent = "Сохранить";
        })

    }
  });
  popupEditProfile.setEventListeners();


  const popupAddCard = new PopupWithForm({
    popupSelector: '.popup_type_new-card',
    handleFormSubmit: (data) => {
      buttonSubmitFormAdd.textContent = "Сохранение...";
      api.addCard(data)
        .then((data) => {
          cardList.addItem(createCard(data));
          popupAddCard.close()
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          buttonSubmitFormAdd.textContent = "Создать";
        })
    }
  });
  popupAddCard.setEventListeners();


  buttonAddCard.addEventListener('click', () => {
    popupAddCard.open();
    formAddCardValidator.hideErrors()
  });

  buttonEditProfile.addEventListener('click', () => {
    popupEditProfile.open();
    formEditProfileValidator.hideErrors()
  });



  buttonUpdateProfile.addEventListener('click', () => {

    editAvatar.open()
  })




