let room = {};
let person = {
  name: "Евгений",
  age: 29,
  education: "высшее"
};
let computer = {
  quantity: 20,
  ok: 18,
  broken: 2
};
let people = {
  quantity: 12,
  male: 9,
  female: 3,
  person: person
};
let size = {
  height: 2.5,
  width: 6,
  length: 7
};
let specifications = {
  CPU: "Intel",
  GPU: "NVidia",
  Monitor: '19"'
};
computer.specifications = specifications;
room.computer = computer;
room.people = people;
room.size = size;
console.log(room);
