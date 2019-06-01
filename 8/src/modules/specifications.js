function Specifications(numberPc, CPU, GPU, Monitor, compiled) {
    this.numberPc = numberPc;
    this.CPU = CPU;
    this.GPU = GPU;
    this.Monitor = Monitor;
    this.compiled = compiled;
}

Specifications.prototype.compilePc = function(){
    if (this.compiled) {
    console.log(`Компьютер № ${this.numberPc} выполняет компиляцию.`);
    }
};

export { Specifications };