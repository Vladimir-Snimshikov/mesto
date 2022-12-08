
export default class Card {
  constructor({ data, templateSelector, handleCardClick, handleCardDelete, handleClickLike }, ownerId) {
    this._data = data;
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleClickLike = handleClickLike;
    this._ownerId = ownerId;
    this._cardOwnerId = data.owner._id;
    this._element = this._getTemplate();


    this._likeCounter = this._element.querySelector(".cards__likes-counter");
    this._likeButton = this._element.querySelector(".cards__like-img");
    this._deleteButton = this._element.querySelector(".cards__delete-button");
  }

  _getTemplate() {
    this._cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);


    return this._cardElement
  }

  getId() {
    return this._data._id;
  }

  isLiked() {
    return this._data.likes.some((item) => {
      return item._id === this._ownerId;
    });
  }

  setLikes(data) {
    this._data.likes = data.likes;
    this._updateLikes();
  }


  _updateLikes() {
    this._likeCounter.textContent = this._data.likes.length;
    if (this.isLiked()) {
      this._likeButton.classList.add("cards__like-img_active");
    } else {
      this._likeButton.classList.remove("cards__like-img_active");
    }
  }

  generateCard() {

    this._cardImage = this._cardElement.querySelector('.cards__img');

    this._cardTitle = this._cardElement.querySelector('.cards__title');
    this._buttonDelete = this._cardElement.querySelector('.cards__delete-button');
    this._buttonLike = this._cardElement.querySelector('.cards__like-img');


    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._updateLikes();

    if (this._ownerId === this._cardOwnerId) {
      this._deleteButton.classList.add("cards__delete-button_active");
    }
    this._setEventListeners();
    return this._cardElement;
  }

  remove() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _setEventListeners() {
    this._buttonDelete.addEventListener('click', () => {
      this._handleCardDelete(this);
    });

    this._buttonLike.addEventListener('click', () => {
      this._handleClickLike(this)
    });


    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._data)
    });
  }
}

