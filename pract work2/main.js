// //1.
// //const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// //let result = 0;
// //array.forEach(element => {
// //  result += element;
// //  return result;
// //});

// //console.log(result); //45
// //Все верно)

// //3.

// const obj1 = {
//   name: "First Jedi"
// };

// const obj2 = Object.create(obj1);
// obj2.greet = function() {
//   console.log(`Hello ${this.name}`);
// };

// const obj3 = Object.create(obj2);

// obj3.name = "Last Jedi";

// obj3.greet();

// obj2.greet.bind(obj1)();

// //консоль выведет сначала 'Hello Last Jedi', затем 'Hello First Jedi'.

// //4.
// function Animal() {
//   this.color = "blue";
//   this.speed = speed;
//   this.run = function() {
//     console.log(
//       `${this.color} animal is running with the speed of ${this.speed} km/h`
//     );
//   };
//   this.run();
// }

// function Rabbit() {}
// Rabbit.prototype = Object.create(Animal.prototype);
// Rabbit.prototype.constructor = Rabbit;

// function WhiteRabbit() {
//   Rabbit.call(this);
//   this.color = "black";
//   this.showColor = function() {
//     console.log(`my color is ${this.color}`);
//   };
// }

// const whiteRabbit = new WhiteRabbit();

// whiteRabbit.showColor();

// //консоль выводит 'my color is black'.

// //5.
const interval = 1000;

// setTimeout(function() {
//   console.log(`the interval is ${interval}`);
// }, interval);
// //консоль выводит 'the interval is 1000'. - верно.

let time = setInterval(() => {
  console.log(`the interval is ${interval}`);
  clearInterval(time);
}, interval);
//myInterval();
//clearInterval(time);
//консоль выводит 'the interval is 1000'.
