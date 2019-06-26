let htmlElements;

let items = [
  { color: "white", bgColor: "blue" },
  { color: "black", bgColor: "yellow", selected: true },
  { color: "green", bgColor: "whitesmoke" }
];

function init() {
  htmlElements = {
    bgColorInput: document.querySelector("input.bg-color-input"),
    textColorInput: document.querySelector("input.text-color-input"),
    addButton: document.querySelector("button.add-button"),
    items: document.querySelector("div.items")
  };

  htmlElements.addButton.addEventListener("click", addButtonClicked);
  htmlElements.textColorInput.addEventListener("focusout", inputFocusOut);
  htmlElements.bgColorInput.addEventListener("focusout", inputFocusOut);

  render();
}

init();

function render() {
  htmlElements.items.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];

    const itemTextSpan = document.createElement("span");
    itemTextSpan.classList.add("item-text");
    itemTextSpan.innerText = currentItem.color;
    itemTextSpan.style.color = currentItem.color;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", deleteButtonClick);
    deleteButton.innerText = "X";

    const newItem = document.createElement("div");
    newItem.className = "item";
    newItem.style.backgroundColor = currentItem.bgColor;
    newItem.appendChild(itemTextSpan);
    newItem.addEventListener("click", newItemClick);
    if (currentItem.selected === true) {
      newItem.classList.add("selected");
      document.body.style.backgroundColor = currentItem.bgColor;
      document.querySelector(".hello-world").style.color = currentItem.color;
    }
    newItem.appendChild(deleteButton);
    htmlElements.items.appendChild(newItem);
  }
}

function newItemClick() {
  for (let i = 0; i < items.length; i++) {
    items[i].selected = false;
  }

  const itemsElement = this.parentElement;
  const itemArray = Array.from(itemsElement.querySelectorAll("div.item"));
  let index = itemArray.indexOf(this);
  items[index].selected = true;
  render();
}

function deleteButtonClick(event) {
  event.stopPropagation();
  let item = this.parentElement;
  const itemsElement = item.parentElement;
  const itemArray = Array.from(itemsElement.querySelectorAll("div.item"));
  let index = itemArray.indexOf(item);
  items.splice(index, 1);
  render();
}

function reset() {
  htmlElements.bgColorInput.value = "";
  htmlElements.textColorInput.value = "";
  htmlElements.bgColorInput.style.borderColor = "";
  htmlElements.textColorInput.style.borderColor = "";
}

function addButtonClicked() {
  let bgrColor = htmlElements.bgColorInput.value;
  let txColor = htmlElements.textColorInput.value;
  let bgColorAdd = checkIfColorCanBeAdded(bgrColor);
  let txColorAdd = checkIfColorCanBeAdded(txColor);
  if (bgColorAdd === false && txColorAdd === false) {
    htmlElements.bgColorInput.style.borderColor = "red";
    htmlElements.textColorInput.style.borderColor = "red";
    return;
  } else if (bgColorAdd === false) {
    htmlElements.bgColorInput.style.borderColor = "red";
    return;
  } else if (txColorAdd === false) {
    htmlElements.textColorInput.style.borderColor = "red";
    return;
  } else {
    const colorAdd = checkIfColorAdded(bgrColor, txColor);
    if (colorAdd === false) {
      items.push({ color: txColor, bgColor: bgrColor });
    } else {
      htmlElements.bgColorInput.style.borderColor = "red";
      htmlElements.textColorInput.style.borderColor = "red";
      return;
    }
  }
  render();
  reset();
}

function checkIfColorCanBeAdded(color) {
  if (color.indexOf("rgb") > -1 || color === "") {
    return false;
  }

  let div = document.createElement("div");
  div.style.backgroundColor = color;
  let colorIsSetCorrectly = div.style.backgroundColor === color;
  return colorIsSetCorrectly;
}
function checkIfColorAdded(bgrColor, txColor) {
  let colorAdded = false;
  for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];
    if (currentItem.color === txColor && currentItem.bgColor === bgrColor) {
      colorAdded = true;
    }
  }
  return colorAdded;
}
function inputFocusOut() {
  const newColor = this.value;
  const colorAdd = checkIfColorCanBeAdded(newColor);
  if (colorAdd === false) {
    this.style.borderColor = "red";
  } else {
    this.style.borderColor = "green";
  }
}
