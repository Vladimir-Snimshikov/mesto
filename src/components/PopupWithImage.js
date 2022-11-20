import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector('.large-picture__img');
    this._imageNameElement = this._popup.querySelector('.large-picture__signature');
  }

  open(cardData) {
    this._imageElement.src = cardData.link;
    this._imageNameElement.alt = cardData.name;
    this._imageNameElement.textContent = cardData.name;
    super.open()
  }
}


