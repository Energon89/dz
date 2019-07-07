let htmlElements;

let messages = [];

function init() {
  htmlElements = {
    loginButton: document.querySelector(".chat-header__btns .btn-green"),
    logoutButton: document.querySelector(".chat-header__btns .btn-red"),
    messageOutput: document.querySelector("ul.messages"),
    messageInput: document.querySelector("textarea"),
    messageForm: document.querySelector(".chat-footer"),
    sendButton: document.querySelector(".chat-footer .btn-green"),
    authorName: document.querySelector(".chat-header__author")
  };

  htmlElements.loginButton.addEventListener("click", logIn);
  htmlElements.logoutButton.addEventListener("click", logOut);
  htmlElements.messageForm.addEventListener("submit", sendMessage);
  // Toggle for the button.
  htmlElements.messageInput.addEventListener("input", toggleButton);
  //htmlElements.messageInput.addEventListener("change", toggleButton);

  showMessages();
}

init();

function logIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  //const provider = new firebase.auth.GoogleAuthProvider();
  //firebase.auth().signInWithPopup(provider);
}

// Signs-out of chat.
function logOut() {
  // Sign out of Firebase.
  //firebase.auth().signOut();
}

// Initiate firebase auth.
function initFirebaseAuth() {
  // Listen to auth state changes.
  //firebase.auth().onAuthStateChanged(authStateObserver);
}

htmlElements.authorName.innerText = "Energon";

function showMessages() {
  htmlElements.messageOutput.innerHTML = "";

  for (let i = 0; i < messages.length; i++) {
    const currentMessage = messages[i];

    const authorPhoto = document.createElement("img");
    authorPhoto.classList.add("message__photo");
    authorPhoto.setAttribute("src", currentMessage.profilePicUrl);
    authorPhoto.setAttribute("alt", "photo_profile");

    const authorNameSpan = document.createElement("span");
    authorNameSpan.classList.add("message__author");
    authorNameSpan.innerText = currentMessage.name;

    const newMessageText = document.createElement("div");
    newMessageText.className = "message__text";
    newMessageText.innerText = currentMessage.text;

    const newMessage = document.createElement("li");
    newMessage.className = "message";
    newMessage.classList.add("message--mine");

    newMessage.appendChild(authorPhoto);
    newMessage.appendChild(authorNameSpan);
    newMessage.appendChild(newMessageText);
    htmlElements.messageOutput.appendChild(newMessage);
  }
}

function sendMessage(event) {
  event.preventDefault();
  const newMessageText = htmlElements.messageInput.value;

  messages.push({
    name: "Energon",
    text: newMessageText,
    profilePicUrl: "images/default_photo_profile.png"
  });
  showMessages();

  htmlElements.messageInput.value = "";
  toggleButton();
}

function toggleButton() {
  if (htmlElements.messageInput.value) {
    htmlElements.sendButton.removeAttribute("disabled");
  } else {
    htmlElements.sendButton.setAttribute("disabled", "true");
  }
}

//!!!End
// initialize Firebase
initFirebaseAuth();

// We load currently existing chat messages and listen to new ones.
//loadMessages();
