let textValue1 = document.getElementById("text1").value;
let textValue2 = document.getElementById("text2").value;
function plus() {
  textValue1 = text1.value;
  textValue2 = text2.value;
  let result = parseInt(textValue1) + parseInt(textValue2);
  console.log(result);
}
function minus() {
  textValue1 = text1.value;
  textValue2 = text2.value;
  let result = parseInt(textValue1) - parseInt(textValue2);
  console.log(result);
}
function multi() {
  textValue1 = text1.value;
  textValue2 = text2.value;
  let result = parseInt(textValue1) * parseInt(textValue2);
  console.log(result);
}
function division() {
  textValue1 = text1.value;
  textValue2 = text2.value;
  let result = parseInt(textValue1) / parseInt(textValue2);
  console.log(result);
}
function reset() {
  let formElements = document.getElementByType(text);
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].value = "";
  }
}
