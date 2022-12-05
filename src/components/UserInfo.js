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

    this._userNameElement.textContent = formValues.firstname;
    this._userProfessionElement.textContent = formValues.profession
  }
}
