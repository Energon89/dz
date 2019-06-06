function Computer(quantity, ok) {
    this.quantity = quantity;
    this.ok = ok;
    const brokenOld = 5;
    this.quantityBroken = 0;

    const countBroken = function() {
        return quantity - ok + brokenOld;
    }

    this.checkIfNeedsRepair = function() {
        this.quantityBroken = countBroken();
        console.log(`Необходимо ремонтировать всего ${this.quantityBroken} ПК.`);
    };
}

export { Computer };