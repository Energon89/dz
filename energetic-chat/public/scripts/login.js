const htmlElements = {
  loginForm: document.querySelector(".login-form"),
  closeButton: document.querySelector(".close")
};

htmlElements.closeButton.addEventListener("click", closeButtonClick);

function Login() {
  htmlElements.loginForm.classList.remove("hidden");
}

function closeButtonClick() {
  htmlElements.loginForm.classList.add("hidden");
}

export { Login };
