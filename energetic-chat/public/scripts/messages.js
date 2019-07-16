import { Data } from "./data.js";

const data = new Data();
let newMessages = [];
const jsonRequestURL = "./messages.json";

data.getUsefulContents(jsonRequestURL, function(data) {
  newMessages = data;
});

function Messages() {}

console.log(newMessages);

Messages.prototype.init = function() {
  setTimeout(showMessages, 100);
};

const htmlElements = {
  messageOutput: document.querySelector("ul.messages"),
  messageInput: document.querySelector("textarea"),
  messageForm: document.querySelector(".chat-footer"),
  sendButton: document.querySelector(".chat-footer .btn-green"),
  authorName: document.querySelector(".chat-header__author")
};

htmlElements.messageForm.addEventListener("submit", sendMessage);
// Toggle for the button.
htmlElements.messageInput.addEventListener("input", toggleButton);

function showMessages() {
  htmlElements.messageOutput.innerHTML = "";

  for (let i = 0; i < newMessages.length; i++) {
    const currentMessage = newMessages[i];

    const authorPhoto = document.createElement("img");
    authorPhoto.classList.add("message__photo");
    authorPhoto.setAttribute("src", "images/default_photo_profile.png");
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

  newMessages.push({
    userId: 1,
    name: "Energon",
    text: newMessageText
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
showMessages();
//localStorage.clear();

export { Messages, newMessages };
