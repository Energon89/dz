function resetColors() {
  document.body.style.backgroundColor = "";
  document.body.className = "";
  document.body.style.removeProperty("--main-color");
}
function updateColor1() {
  resetColors();
  let colorInput = document.querySelector(".colorInp").value;
  console.log("Color: " + colorInput);
  document.body.style.backgroundColor = colorInput;
}
function updateColor2(selectElement) {
  resetColors();
  let colorSelect = selectElement.value;
  console.log("Color: " + colorSelect);
  document.body.style.backgroundColor = colorSelect;
}
function updateColor3(selectElement) {
  resetColors();
  let colorClass = selectElement.value;
  console.log("Color: " + colorClass);
  document.body.className = colorClass;
}
function updateColor4() {
  resetColors();
  let colorUpd = document.getElementById("color").value;
  console.log("Color: " + colorUpd);
  document.body.style.setProperty("--main-color", colorUpd);
}
function updateColor5(selectElement) {
  resetColors();
  let colorUpd = selectElement.value;
  console.log("Color: " + colorUpd);
  document.body.style.setProperty("--main-color", colorUpd);
}
