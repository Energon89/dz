let surname = prompt("Напишите Вашу Фамилию:");
let reg = /^[а-яА-ЯёЁa-zA-Z. ]+$/;
let rez = reg.test(surname);
while (rez === false) {
  surname = prompt("Напишите Вашу Фамилию корректно:");
  rez = reg.test(surname);
}
let name = prompt("Напишите Ваше Имя:");
rez = reg.test(name);
while (rez === false) {
  name = prompt("Напишите Ваше Имя корректно:");
  rez = reg.test(name);
}
let lastname = prompt("Напишите Ваше Отчество:");
rez = reg.test(lastname);
while (rez === false) {
  lastname = prompt("Напишите Ваше Отчество корректно:");
  rez = reg.test(lastname);
}
let age = prompt("Ваш возраст в годах?");
while (
  isNaN(Number(age)) ||
  Number(age) !== parseInt(age) ||
  Number(age) === 0
) {
  age = prompt("Напишите Ваш возраст корректно!");
}
age = Number(age);
let gender = confirm("Ваш пол мужской?");
let pension;
let year = age + 5;
if ((age < 63 && gender === true) || (age < 58 && gender === false)) {
  pension = "нет";
} else {
  pension = "да";
}
if (gender === true) {
  gender = "мужской";
} else {
  gender = "женский";
}
alert(
  "Ваше ФИО: " +
    surname +
    " " +
    name +
    " " +
    lastname +
    "\n" +
    "Ваш возраст в годах: " +
    age +
    "\n" +
    "Ваш возраст в днях: " +
    age * 365 +
    "\n" +
    "Через 5 лет Вам будет: " +
    year +
    "\n" +
    "Ваш пол: " +
    gender +
    "\n" +
    "Вы на пенсии: " +
    pension
);
