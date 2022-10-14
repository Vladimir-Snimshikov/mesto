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



function createCard(item) {
  const newCard = blankCard.content.cloneNode(true); //копируем болванку
  const cardImage = newCard.querySelector('.cards__img'); // находим картинку у карточки
  const cardsTitle = newCard.querySelector('.cards__title');// находим текст у карточки
  const buttonDelete = newCard.querySelector('.cards__delete-button'); // находим кнопку удаления у карточки
  const buttonLike = newCard.querySelector('.cards__like-img'); //находис кнопку лайка у карточки
  cardImage.src = item.link; //копируем адрес картинки из массива в картинку у карточки
  cardImage.alt = item.name; //копируем название картинки из массива и вставляем в аллт новой картинки
  cardsTitle.textContent = item.name; //берем имя картинки из массива и подписываем картику в новой карточке
  buttonDelete.addEventListener('click', () => { buttonDelete.closest('.cards__item').remove() }); //вешаем слушатель на корзину для удаления карточки
  buttonLike.addEventListener('click', () => buttonLike.classList.toggle('cards__like-img_active')) //вешаем слушатель для лайк для закрашивания
  cardImage.addEventListener('click', (evt) => { //вешаем слушатель на картики для открытия оверлея с увеличенной картинкой
    openPopup(overlayLargeImg);

    imgOverlay.src = evt.target.src; //
    imgOverlay.alt = evt.target.alt;
    imgSignature.textContent = cardsTitle.textContent;
  })
  return newCard;
}

 function renderItem (item)  {
  const newCard = createCard(item);
  cards.prepend(newCard)
}

initialCard.forEach(item => { renderItem(item) }) //вызываем функции для создания карточке на странице (данные берем из массива)


function openPopup(popupName) {  //функция открытия попапа
  popupName.classList.add('popup_opened');

  document.addEventListener('click', closePopupByClick);
  document.addEventListener('keydown', exitByEscape)
}

function closePopup(popupName) {  //функция для закрытия попапа
  popupName.classList.remove('popup_opened');

  document.removeEventListener('click', closePopupByClick);
  document.removeEventListener('keydown', exitByEscape)
}



function closePopupByClick(evt) {

  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target)
  };
};


function exitByEscape(evt) {
  if (evt.key === 'Escape') {
    const curentPopup = document.querySelector('.popup_opened');
    closePopup(curentPopup);
  }
}


function editFormSubmitHandler(evt) {  //функция отправки формы при редактировании профиля
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  professionProfile.textContent = professionInput.value;
  closePopup(evt);
  evt.target.reset();
}

function addFormSubmitHandler(evt) { //функция отправки формы при добавлениии карточки
  evt.preventDefault();
  const newCard = {
    name: inputNameCard.value,
    link: inputImgCard.value
  }
  renderItem(newCard);
  const curentPopup = document.querySelector('.popup_opened')
  closePopup(curentPopup);
  evt.target.reset();
  const buttonElement = evt.target.querySelector(formSelectors.submitButtonSelector);
  inactivateSubmit(buttonElement, formSelectors);
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

formEdit.addEventListener('submit', editFormSubmitHandler);
formAdd.addEventListener('submit', addFormSubmitHandler);
