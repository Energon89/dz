function People(quantity, male, female) {
    this.quantity = quantity;
    this.male = male;
    this.female = female;
    this.person = 'Вася';
    this.percent = 0;
    const pass = 9; //область видимости функция-конструктор People

    const countPercent = function() {
        const percent = parseInt((quantity - pass)/quantity*100); //область видимости метод countPercent
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