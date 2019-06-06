function Specifications(numberPc, cpu, gpu, monitor) {
    this.numberPc = numberPc;
    this.cpu = cpu;
    this.gpu = gpu;
    this.monitor = monitor;

    this.checkCpu = function() {
        switch (this.cpu) {
            case 'Intel':
            var message = `Компьютер № ${this.numberPc} на базе ${this.cpu}.`;  //область видимости оператор switch
            console.log(message);
            break;
            case 'AMD':
            message = `Компьютер № ${this.numberPc} на базе ${this.cpu}, греется печка.`;
            console.log(message);
            break;
            case 'Apple':
            message = `Компьютер № ${this.numberPc} на базе ${this.cpu}, мажер.`;
            console.log(message);
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