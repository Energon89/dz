function Person(name, age, education) {
    this.name = name;
    this.age = age;
    this.education = education;
    this.teach = false;
    const tired = true;
    this.workTime = 0;

    const countTime = function() {
        const start = 15;
        const end = 19;
        const workTime = end - start;
        return workTime;
    }

    this.checkIfTired = function() {
        this.workTime = countTime();
        if (tired) {
        console.log(`${this.name} устал, он работает ${this.workTime} час(а/ов).`);}
    };
}

Person.prototype.teachJs = function(teach){
    this.teach = teach;
    if (this.teach) {
        console.log(`${this.name} учит JS.`);
    }
};

  export { Person };

