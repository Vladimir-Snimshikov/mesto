export default class UserInfo {
  constructor({userNameSelector, userProfessionSelector, userAvatarSelector}) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userProfessionElement = document.querySelector(userProfessionSelector);
    this._userAvatarElement = document.querySelector(userAvatarSelector);
  }
  getUserInfo() {
    return {
      firstname: this._userNameElement.textContent,
      profession: this._userProfessionElement.textContent
    }
  }

  setUserInfo(formValues) {

    this._userNameElement.textContent = formValues.name;
    this._userProfessionElement.textContent = formValues.about
  }

  setAvatarInfo(data) {
    this._userAvatarElement.src = data.avatar;
    this._id = data.id;
  }

  getId() {
    return this._id;
  }
}
