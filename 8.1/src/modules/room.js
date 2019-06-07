function Room(number, computer, people, size) {
    this.number = number;
    this.computer = computer;
    this.people = people;
    this.size = size;
}

Room.prototype.assignNumber = function(){
    console.log(`Описание аудитории № ${this.number} : `);
};

export { Room };