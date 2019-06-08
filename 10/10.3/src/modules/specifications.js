function Specifications(numberPc, cpu, gpu, monitor) {
    this.numberPc = numberPc;
    this.cpu = cpu;
    this.gpu = gpu;
    this.monitor = monitor;

    this.checkCpu = function() {
        switch (this.cpu) {
            case 'Intel':
            const message1 = `Компьютер № ${this.numberPc} на базе ${this.cpu}.`;  //область видимости оператор switch case 'Intel'
            console.log(message1);
            break;
            case 'AMD':
            const message2 = `Компьютер № ${this.numberPc} на базе ${this.cpu}, греется печка.`; //область видимости оператор switch case 'AMD'
            console.log(message2);
            break;
            case 'Apple':
            const message3 = `Компьютер № ${this.numberPc} на базе ${this.cpu}, мажер.`; //область видимости оператор switch case 'Apple'
            console.log(message3);
            break;
        }
    };
}

Specifications.compiled = false;

Specifications.prototype.checkIfCompile = function(compiled){
    if (compiled) {
        this.compiled = compiled;
    console.log(`Компьютер № ${this.numberPc} выполняет компиляцию.`);
    }
};

export { Specifications };