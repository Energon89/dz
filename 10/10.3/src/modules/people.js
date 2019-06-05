function People(quantity, male, female) {
    this.quantity = quantity;
    this.male = male;
    this.female = female;
    this.person = 'Вася';
    this.percent = 0;
    const pass = 9;

    const countPercent = function() {
        const percent = parseInt((quantity - pass)/quantity*100);
        return percent;
    }

    this.checkIfPassTest = function() {
        this.percent = countPercent();
        console.log(`Не сдало тест ${this.percent} % стедентов.`);
    };
}

People.prototype.countPeople = function(person) {
    this.person = person;
    console.log(`В аудитории ${this.quantity} студентов.`);
};

export { People };