let htmlElements;

let items = [
  { color: "white", bgColor: "blue" },
  { color: "black", bgColor: "yellow" },
  { color: "green", bgColor: "whitesmoke" }
];

function init() {
  htmlElements = {
    bgColorInput: document.querySelector("input.bg-color-input"),
    textColorInput: document.querySelector("input.text-color-input"),
    addButton: document.querySelector("button.add-button"),
    items: document.querySelector("div.items")
  };

  render();
}

init();

function render() {
  // Верстка
  // <div class="items">
  //   <div class="item" style="background-color: blue;">
  //     <span class="item-text" style="color: white;">
  //       white
  //     </span>
  //     <button class="delete-button">X</button>
  //   </div>
  //   <div class="item" style="background-color: yellow;">
  //     <span class="item-text" style="color: black;">
  //       black
  //     </span>
  //     <button class="delete-button">X</button>
  //   </div>
  // </div>
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
}
