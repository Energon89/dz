function Processor() {} // Создается Processor, создание Obj4 на основе базового объекта Obj5.
// Свойство __proto__ объекта 4 указывает на объект 5, Processor.prototype указывает на объект 4,
// свойство constructor объекта 4 указывает на Processor.prototype.

function MicroProcessor() {} // Создается MicroProcessor, создание Obj7 на основе базового объекта Obj5.
// Свойство __proto__ объекта 7 указывает на объект 5, MicroProcessor.prototype указывает на объект 7,
// свойство constructor объекта 7 указывает на Processor.prototype.

MicroProcessor.prototype = Object.create(Processor.prototype); // Создаятся Obj3, свойство __proto__ объекта 3
// указывает на объект 4, MicroProcessor.prototype указывает на объект 3, а не на объект 7.

MicroProcessor.prototype.constructor = MicroProcessor; // Свойство constructor объекта 3 указывает на MicroProcessor.

function Intel() {} // Создается Intel, создание Obj6 на основе базового объекта Obj5.
// Свойство __proto__ объекта 6 указывает на объект 5, Intel.prototype указывает на объект 6,
// свойство constructor объекта 6 указывает на Intel.prototype.

Intel.prototype = Object.create(MicroProcessor.prototype); // Создаятся Obj2, свойство __proto__ объекта 2
// указывает на объект 3, Intel.prototype указывает на объект 2, а не на объект 6.

Intel.prototype.constructor = Intel; // Свойство constructor объекта 2 указывает на Intel.

const intel = new Intel(); // Создается объект Obj1, свойтсово __proto__ которого указывает на объект Obj2
// констатна intel указывает на объект 1.

console.log(intel);
