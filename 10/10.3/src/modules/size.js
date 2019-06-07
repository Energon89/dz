function Size(height, width, length) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.name = 53.1;
    const year = 2019; //область видимости функция-конструктор Size
    const lastRepairs = 2010; //область видимости функция-конструктор Size
    this.passed = 0;

    const countDifference = function() { //область видимости функция-коструктор Size
        const difference = year - lastRepairs; //область видимости функциональное выражение countDifference
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