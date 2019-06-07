function Person(name, age, education) {
    this.name = name;
    this.age = age;
    this.education = education;
    this.teach = false;
    const tired = true; //область видимости функция-конструктор Person
    this.workTime = 0;

    const countTime = function() { //область видимости функция-коструктор Person
        const start = 15; //область видимости функциональное выражение countTime
        const end = 19; //область видимости функциональное выражание countTime
        const workTime = end - start; //область видимости функциональное выражание countTime
        return workTime;
    }

    this.checkIfTired = function() {
        this.workTime = countTime();
        if (tired) {
        console.log(`${this.name} устал, он работает ${this.workTime} час(а/ов).`);}
    };

    this.checkIfOld = function() {
    for ( let i=1; i<=this.age; i++ ) {
        let age = [i];} //область видимости цикл for
    console.log(`${this.name}  ${age}  лет, он уже большой`);}
}

Person.prototype.teachJs = function(teach){
    this.teach = teach;
    if (this.teach) {
        const message = `${this.name} учит JS.`; //область видимости оператор if
        console.log(message);
    }
};

  export { Person };

