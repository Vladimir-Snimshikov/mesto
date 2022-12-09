
export default class Card {
  constructor({ data, templateSelector, handleCardClick, handleCardDelete, handleClickLike }, userId) {
    this._data = data;
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleClickLike = handleClickLike;
    this._userId = userId;
    this._cardOwnerId = data.owner._id;




    this._cardElement = this._getTemplate()

    this._cardImage = this._cardElement.querySelector('.cards__img');
    this._cardTitle = this._cardElement.querySelector('.cards__title');
    this._buttonDelete = this._cardElement.querySelector('.cards__delete-button');
    this._buttonLike = this._cardElement.querySelector('.cards__like-img');
    this._likeCounter = this._cardElement.querySelector(".cards__likes-counter");


  }

  _getTemplate() {
      const templateElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);


     return templateElement
  }

  getId() {
    return this._data._id;
  }

  isLiked() {
    return this._data.likes.some((item) => {
      return item._id === this._userId;
    });
  }

  setLikes(data) {
    this._data.likes = data.likes;
    this._updateLikes();
  }


  _updateLikes() {
    this._likeCounter.textContent = this._data.likes.length;
    if (this.isLiked()) {
      this._buttonLike.classList.add("cards__like-img_active");
    } else {
      this._buttonLike.classList.remove("cards__like-img_active");
    }
  }

  generateCard() {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._updateLikes();

    if (this._userId === this._cardOwnerId) {
      this._buttonDelete.classList.add("cards__delete-button_active");
    }
    this._setEventListeners();
    return this._cardElement;
  }

  delete() {
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

