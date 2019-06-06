function Size(height, width, length) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.name = 53.1;
    const year = 2019;
    const lastRepairs = 2010;
    this.passed = 0;

    const countDifference = function() {
        const difference = year - lastRepairs; //область видимости метод countDifference
        return difference;
    }

    this.checkIfNeedRenovation = function() {
        this.passed = countDifference();
        console.log(`Необходимо реконструкция помещения, прошло ${this.passed} лет.`);
    };
}

Size.prototype.writeSize = function() {
    const name = 57; //область видимости метод writeSize
    this.name = name;
    console.log(`Размеры аудитории ${this.name} - высота: ${this.height} м; ширина: ${this.width} м; длина: ${this.length} м.`);
};

export { Size };