const currentTime = new Date(); //область видимости текущий модуль room.js

function Room(number, computer, size, lastClean) {
    this.number = number;
    this.computer = computer;
    this.people = 20;
    this.size = size;
    const period = 4; //область видимости функция-конструктор Room
    this.currentPeriod = 0;
    this.lastClean = lastClean;

    const countTime = function() { //область видимости функция-коструктор Room
        const timeStrLong  = currentTime.toTimeString(); //область видимости функциональное выражение countTime
        const timeStr = timeStrLong.split(' ')[0]; //область видимости функциональное выражение countTime
        const timeStrShort = timeStr.split(':')[0]; //область видимости функциональное выражение countTime
        return timeStrShort;
    }

    this.cleanRoom = function() {
        const currentPeriod = Math.abs(countTime() - this.lastClean); //область видимости функциональное выражение cleanRoom
        this.currentPeriod = currentPeriod;
        if (this.currentPeriod > period) {
            console.log(`Необходимо убрать комнату ${this.number}, прошло ${this.currentPeriod} час(а/ов).`);
        }
    };
}

let pi = 3.14; //область видимости модуль room.js после после объявления функции-конструктора Room

Room.prototype.assignNumber = function(people){
    pi = 0;
    this.people = people;
    console.log(`Описание аудитории № ${this.number} : `);
};

export { Room };