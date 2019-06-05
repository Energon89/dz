function Specifications(numberPc, cpu, gpu, monitor) {
    this.numberPc = numberPc;
    this.CPU = cpu;
    this.GPU = gpu;
    this.Monitor = monitor;
    this.compiled = false;
}

Specifications.prototype.checkIfCompile = function(compiled){
    this.compiled = compiled;
    if (this.compiled) {
    console.log(`Компьютер № ${this.numberPc} выполняет компиляцию.`);
    }
};

export { Specifications };