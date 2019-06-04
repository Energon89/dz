function Room(number, computer, size, lastClean) {
    this.number = number;
    this.computer = computer;
    this.people = 20;
    this.size = size;
    const period = 8;
    this.currentPeriod = 0;
    this.lastClean = lastClean;

    const countTime = function() {
        const currentTime = new Date();
        const timeStrLong  = currentTime.toTimeString();
        const timeStr = timeStrLong.split(' ')[0];
        const timeStrShort = timeStr.split(':')[0];
        return timeStrShort;
    }

    this.cleanRoom = function() {
        this.currentPeriod = Math.abs(countTime() - this.lastClean);
        if (this.currentPeriod > period) {
        console.log(`Необходимо убрать комнату ${this.number}, прошло ${this.currentPeriod} час(а/ов).`);
        }
    };
}

Room.prototype.assignNumber = function(people){
    this.people = people;
    console.log(`Описание аудитории № ${this.number} : `);
};

export { Room };