const editButton = document.querySelector('.profile__edit-button');  //кнопка редак-ия профиля
const exitButtons = document.querySelectorAll('.popup__exit-button'); //кнопкИ закрытия попапов
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


const initialCard = [
  {
    "name": "Роза Хутор",
    "link": "./images/roza-hutor.jpg"
  },
  {
    "name": "Олимпийский парк",
    "link": "./images/olympic-park.jpg"
  },
  {
    "name": "Краснодар",
    "link": "./images/krasnodar.jpg"
  },
  {
    "name": "Москва",
    "link": "./images/moscow.jpg"
  },
  {
    "name": "Санкт-Петербург",
    "link": "./images/Sankt-petersburg.jpg"
  },
  {
    "name": "Сочи",
    "link": "./images/sochi.jpg"
  }
];


function createCard (item) {
  const newCard = blankCard.content.cloneNode(true); //копируем болванку
  const cardImage = newCard.querySelector('.cards__img'); // находим картинку у карточки
  const cardsTitle = newCard.querySelector('.cards__title');// находим текст у карточки
  const buttonDelete = newCard.querySelector('.cards__delete-button'); // находим кнопку удаления у карточки
  const buttonLike = newCard.querySelector('.cards__like-img'); //находис кнопку лайка у карточки
  cardImage.src = item.link; //копируем адрес картинки из массива в картинку у карточки
  cardImage.alt = item.name; //копируем название картинки из массива и вставляем в аллт новой картинки
  cardsTitle.textContent = item.name; //берем имя картинки из массива и подписываем картику в новой карточке
  buttonDelete.addEventListener('click', () => {buttonDelete.closest('.cards__item').remove()}); //вешаем слушатель на корзину для удаления карточки
  buttonLike.addEventListener('click', () => buttonLike.classList.toggle('cards__like-img_active')) //вешаем слушатель для лайк для закрашивания
  cardImage.addEventListener('click', (evt) => { //вешаем слушатель на картики для открытия оверлея с увеличенной картинкой
    openPopup(overlayLargeImg);
    document.addEventListener('keydown', exitPopupByEscape);
    document.addEventListener('click', exitPopupByClick);
    imgOverlay.src = evt.target.src; //
    imgOverlay.alt = evt.target.alt;
    imgSignature.textContent = cardsTitle.textContent;
  })
 return newCard;
}

renderItem = (item) => {
  const newCard = createCard(item);
  cards.prepend(newCard)
}

initialCard.forEach(item => {renderItem(item)}) //вызываем функции для создания карточке на странице (данные берем из массива)


const openPopup = (popupName) => {  //функция открытия попапа
  popupName.classList.add('popup_opened')
}

editButton.addEventListener('click', () => { //вешаем слушатель для вызова открытия попапа(нужного) по клику
  nameInput.value = nameProfile.textContent;
  professionInput.value = professionProfile.textContent;
  openPopup(overlayEditProfile);
  document.addEventListener('keydown', exitPopupByEscape);
  document.addEventListener('click', exitPopupByClick);
});

buttonAddCard.addEventListener('click', () => { //вешаем слушатель для вызова открытия попапа(нужного) по клику
  openPopup(overlayNewCard);

  document.addEventListener('keydown', exitPopupByEscape);
  document.addEventListener('click', exitPopupByClick);
});

function exitPopupByClick  (evt) {
    if (evt.target.classList.contains('popup_opened')){
    evt.target.classList.remove('popup_opened');
    removeListeners ()
  }
}

function exitPopupByEscape (evt) {
  const curentPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    curentPopup.classList.remove('popup_opened');
    removeListeners ();
  }
}

function removeListeners () {
  document.removeEventListener('keydown', exitPopupByEscape);
  document.removeEventListener('click', exitPopupByClick);
}

const closePopup = (popupExitButton) => {  //функция для закрытия попапа
  const PopupClose = popupExitButton.target.closest('.popup');
  PopupClose.classList.remove('popup_opened');
  removeListeners ();
}

exitButtons.forEach(button => {button.addEventListener('click', closePopup)}) //навешиваем слушатели на все кнопки(крестики) и передаем функцию закрытия попапа по клику


const editFormSubmitHandler = (evt) => {  //функция отправки формы при редактировании профиля
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  professionProfile.textContent = professionInput.value;
  closePopup(evt);
  evt.target.reset();
}

const addFormSubmitHandler = (evt) => { //функция отправки формы при добавлениии карточки
  evt.preventDefault();
 const newCard = {
  name: inputNameCard.value,
  link: inputImgCard.value
 }
 renderItem(newCard);
  closePopup(evt);
  evt.target.reset();
}

formEdit.addEventListener('submit', editFormSubmitHandler);
formAdd.addEventListener('submit', addFormSubmitHandler);
