function Room(computer, people, size) {
  this.computer = computer;
  this.people = people;
  this.size = size;
}
function Person(name, age, education) {
  this.name = name;
  this.age = age;
  this.education = education;
}
function Computer(quantity, ok, broken) {
  this.quantity = quantity;
  this.ok = ok;
  this.broken = broken;
}
function People(quantity, male, female) {
  this.quantity = quantity;
  this.male = male;
  this.female = female;
}
function Size(height, width, length) {
  this.height = height;
  this.width = width;
  this.length = length;
}
function Specifications(CPU, GPU, Monitor) {
  this.CPU = CPU;
  this.GPU = GPU;
  this.Monitor = Monitor;
}

const myPerson = new Person("Евгений", 29, "высшее");

const specifications57 = new Specifications(
  "Intel Core 9700",
  "NVidia GTX 2080",
  '19"'
);

const computerRoom57 = new Computer(20, 18, 2);

const peopleRoom57 = new People(12, 9, 3);

const sizeRoom57 = new Size(2.5, 6, 7);

computerRoom57.specifications = specifications57;
peopleRoom57.person = myPerson;

const room57 = new Room(computerRoom57, peopleRoom57, sizeRoom57);
console.log(room57);
