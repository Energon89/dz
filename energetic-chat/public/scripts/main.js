import { Login } from "./login.js";
import { Messages, newMessages } from "./messages.js";

const login = new Login();
const messages = new Messages();

const htmlElements = {
  loginButton: document.querySelector(".chat-header__btns .btn-green"),
  logoutButton: document.querySelector(".chat-header__btns .btn-red"),
  authorName: document.querySelector(".chat-header__author"),
  loginButtonText: document.querySelector(
    "form.signup-form > div.buttom-text > a"
  )
};

htmlElements.loginButton.addEventListener("click", login.loginClick);
htmlElements.loginButtonText.addEventListener("click", login.loginClick);
htmlElements.logoutButton.addEventListener("click", login.logoutClick);

messages.init(newMessages);

htmlElements.authorName.innerText = "Energon";
