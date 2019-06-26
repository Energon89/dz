function Room(number, computer, people, size) {
  this.number = number;
  this.computer = computer;
  this.people = people;
  this.size = size;
}

function Person(name, age, education, teach) {
  this.name = name;
  this.age = age;
  this.education = education;
  this.teach = teach;
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

function Specifications(numberPc, CPU, GPU, Monitor, compiled) {
  this.numberPc = numberPc;
  this.CPU = CPU;
  this.GPU = GPU;
  this.Monitor = Monitor;
  this.compiled = compiled;
}

const myPerson = new Person("Евгений", 29, "высшее", true);

const specifications57 = new Specifications(
  7,
  "Intel 9700",
  "NVidia GTX 2080",
  '19"',
  true
);

const computerRoom57 = new Computer(20, 18, 2);

const peopleRoom57 = new People(12, 9, 3);

const sizeRoom57 = new Size(2.5, 6, 7);

computerRoom57.specifications = specifications57;
peopleRoom57.person = myPerson;

const room57 = new Room(57, computerRoom57, peopleRoom57, sizeRoom57);

console.log(room57);

Person.prototype.personTeach = function() {
  if (this.teach) {
    console.log(`${this.name} учит JS.`);
  }
};

Specifications.prototype.compilePc = function() {
  if (this.compiled) {
    console.log(`Компьютер № ${this.numberPc} выполняет компиляцию.`);
  }
};

Size.prototype.writeSize = function() {
  console.log(
    `Размеры аудитории - высота: ${this.height} м; ширина: ${
      this.width
    } м; длина: ${this.length} м.`
  );
};

People.prototype.quantityPeople = function() {
  console.log(`В аудитории ${this.quantity} студентов.`);
};

Room.prototype.titleRoom = function() {
  console.log(`Описание аудитории № ${this.number} : `);
};

room57.titleRoom();
sizeRoom57.writeSize();
peopleRoom57.quantityPeople();
myPerson.personTeach();
specifications57.compilePc();
