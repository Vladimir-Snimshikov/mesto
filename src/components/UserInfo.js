export default class UserInfo {
  constructor({userNameSelector, userProfessionSelector}) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userProfessionElement = document.querySelector(userProfessionSelector);
  }
  getUserInfo() {
    return {
      firstname: this._userNameElement.textContent,
      profession: this._userProfessionElement.textContent
    }
  }

  setUserInfo(formValues) {
    console.log(formValues);
    console.log(this._userNameElement.textContent)
    this._userNameElement.textContent = formValues.firstname;
    this._userProfessionElement.textContent = formValues.profession
  }
}
