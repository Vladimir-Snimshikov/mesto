
export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;

  }

  getCardElement() {

    //создаем копию темплейта и находим ее елементы
    this._cardElement = this._templateSelector
      .content
      .querySelector('.cards__item')
      .cloneNode(true);

    this._cardImage = this._cardElement.querySelector('.cards__img');
    this._cardTitle = this._cardElement.querySelector('.cards__title');
    this._buttonDelete = this._cardElement.querySelector('.cards__delete-button');
    this._buttonLike = this._cardElement.querySelector('.cards__like-img');

    //заполняем карточку
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    //навешали слушатели
    this._setEventListeners();

    return this._cardElement;
  }

  _handleDeleteCard = () => {

    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeCard = () => {

    this._buttonLike.classList.toggle('cards__like-img_active');
  }

  _setEventListeners() {
    this._buttonDelete.addEventListener('click', this._handleDeleteCard);
    this._buttonLike.addEventListener('click', this._handleLikeCard);
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

}
