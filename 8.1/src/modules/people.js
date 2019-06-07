function People(quantity, male, female, person) {
    this.quantity = quantity;
    this.male = male;
    this.female = female;
    this.person = person;
}

People.prototype.countPeople = function() {
    console.log(`В аудитории ${this.quantity} студентов.`);
};

export { People };