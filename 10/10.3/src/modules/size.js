function Size(height, width, length) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.name = 53.1;
    const year = 2019;
    const lastRepairs = 2010;
    this.passed = 0;

    const countDifference = function() {
        return year - lastRepairs;
    }

    this.checkIfNeedRenovation = function() {
        this.passed = countDifference();
        console.log(`Необходимо реконструкция помещения, прошло ${this.passed} лет.`);
    };
}

Size.prototype.writeSize = function() {
    this.name = 57;
    console.log(`Размеры аудитории ${this.name} - высота: ${this.height} м; ширина: ${this.width} м; длина: ${this.length} м.`);
};

export { Size };