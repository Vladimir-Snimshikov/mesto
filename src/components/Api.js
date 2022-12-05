export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _responseProcessing(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject({ message: "Ошибка на стороне сервера", res })
  }

  getUserInfo() {
    return fetch('https://nomoreparties.co/v1/cohort-54/users/me', { headers: this._headers })
      .then(this._responseProcessing)
  }

  getAllCards() {
    return fetch(`${this._url}cards`, { headers: this._headers })
    .then(this._responseProcessing)
  }

}

