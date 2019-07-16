const htmlElements = {
  loginForm: document.querySelector("form.login-form"),
  signupForm: document.querySelector("form.signup-form"),
  closeButtons: document.querySelectorAll(".close"),
  signUp: document.querySelector("form.login-form > div.buttom-text > a"),
  logInButton: document.querySelector("form.login-form > button"),
  inputUsername: document.querySelector(
    "form.login-form > div.txtb > input[type=text]"
  ),
  inputPassword: document.querySelector(
    "form.login-form > div:nth-child(4) > input[type=password]"
  )
};

htmlElements.signUp.addEventListener("click", signUpClick);
htmlElements.closeButtons.forEach(function(button) {
  button.addEventListener("click", closeButtonClick);
});
htmlElements.logInButton.addEventListener("click", logIn);

function Login() {}

Login.prototype.loginClick = function() {
  htmlElements.signupForm.classList.add("hidden");
  htmlElements.loginForm.classList.remove("hidden");
};

Login.prototype.logoutClick = function() {};

function logIn() {
  console.log(htmlElements.inputUsername.value);
}

function signUpClick() {
  htmlElements.loginForm.classList.add("hidden");
  htmlElements.signupForm.classList.remove("hidden");
}

function closeButtonClick() {
  htmlElements.loginForm.classList.add("hidden");
  htmlElements.signupForm.classList.add("hidden");
}

export { Login };
