/* import './index.css';
import { initialCard,
    buttonAddCard, formSelectors,
    formEdit, formAdd,
    blankCard, buttonEditProfile,
    buttonUpdateProfile, config}
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

const api = new Api(config);

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



 */



























/*   import './index.css';
import {
  initialCard,
  buttonAddCard, formSelectors,
  formEdit, formAdd,
  blankCard, buttonEditProfile,
  buttonUpdateProfile, config
}
  from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js'
import { data } from 'autoprefixer';


const formEditProfileValidator = new FormValidator(formSelectors, formEdit);
formEditProfileValidator.enableValidation();

const formAddCardValidator = new FormValidator(formSelectors, formAdd);
formAddCardValidator.enableValidation();

const popupLargeImage = new PopupWithImage('.popup_type_large-picture');
popupLargeImage.setEventListeners();

const api = new Api(config);

function createCard(data) {
  const newCard = new Card({
    data, templateSelector: blankCard,
    handleCardClick: (data) => {
      popupLargeImage.open(data);
    }
  });
  const cardElement = newCard.getCardElement();

  return cardElement;
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
  cardList.renderItems(array)
})
.catch((err)=> {
  console.log(err)
})




const editAvatar = new PopupWithForm({
  popupSelector: '.popup_type_avatar-update',
  handleFormSubmit: (inputValues) => {
    editAvatar.getSubButonElement().textContent = "Сохранение...";
    api
      .putAvatar(inputValues)
      .then((data) => {
        console.log(data)
        userInfo.setAvatarInfo(data);
        editAvatar.close()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        editAvatar.getSubButonElement().textContent = "Сохранить";
      })
  }
})



const userInfo = new UserInfo({
  userNameSelector: '.profile__name',
  userProfessionSelector: '.profile__profession',
  userAvatarSelector: '.profile__img'
});



const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile',
  handleFormSubmit: (formValues) => {
    popupEditProfile.getSubButonElement().textContent = "Сохранение...";
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
        popupEditProfile.getSubButonElement().textContent = "Сохранить";
      })

  }
});
popupEditProfile.setEventListeners();



const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_type_new-card',
  handleFormSubmit: (data) => {
    popupAddCard.getSubButonElement().textContent = "Сохранение...";
    api.addCard(data)
      .then((data) => {
        cardList.addItem(createCard(data));
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        popupAddCard.getSubButonElement().textContent = "Сохранить";
      })
  }
});
popupAddCard.setEventListeners();


buttonAddCard.addEventListener('click', () => {
  popupAddCard.open();
  formAddCardValidator.hideErrors()
});

buttonEditProfile.addEventListener('click', () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  popupEditProfile.open();
  formEditProfileValidator.hideErrors()
});



buttonUpdateProfile.addEventListener('click', () => {
  editAvatar.setEventListeners();
  editAvatar.open()
})

api.getAllCards()
  .then(res => console.log(res))


  console.log(userInfo.getId())
 */




































  import './index.css';
  import {
    buttonAddCard, formSelectors,
    formEdit, formAdd, buttonEditProfile,
    buttonUpdateProfile, config
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



  function createCard(data) {
    const newCard = new Card({
      data, templateSelector: '.blank-card', handleCardClick,
       handleCardDelete, handleClickLike}, userInfo.getId()
    );
    const cardElement = newCard.generateCard();

    return cardElement;
  }




 function handleCardClick (data) {
  popupLargeImage.open(data)
 }

 function handleCardDelete (card) {
  deletePopup.open();

  deletePopup.setSubmitAction(() => {
    api
      .deleteCard(card.getId())
      .then(function () {
        card.remove();
        deletePopup.close();
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function handleClickLike (card) {
  api
  .toggleLike(card.getId(), card.isLiked())
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
      editAvatar.getSubButonElement().textContent = "Сохранение...";

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
          editAvatar.getSubButonElement().textContent = "Сохранить";
        })
    }
  })
  editAvatar.setEventListeners()


  const popupEditProfile = new PopupWithForm({
    popupSelector: '.popup_type_edit-profile',
    handleFormSubmit: (formValues) => {
      popupEditProfile.getSubButonElement().textContent = "Сохранение...";
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
          popupEditProfile.getSubButonElement().textContent = "Сохранить";
        })

    }
  });
  popupEditProfile.setEventListeners();


  const popupAddCard = new PopupWithForm({
    popupSelector: '.popup_type_new-card',
    handleFormSubmit: (data) => {
      popupAddCard.getSubButonElement().textContent = "Сохранение...";
      api.addCard(data)
        .then((data) => {
          cardList.addItem(createCard(data));
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          popupAddCard.getSubButonElement().textContent = "Сохранить";
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




