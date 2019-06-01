function Size(height, width, length) {
    this.height = height;
    this.width = width;
    this.length = length;
}

Size.prototype.writeSize = function() {
    console.log(`Размеры аудитории - высота: ${this.height} м; ширина: ${this.width} м; длина: ${this.length} м.`);
};

export { Size };