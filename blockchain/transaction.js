
// transaction hash 및 sign 기능은 구현하지 않음.

class transaction {

    constructor(from, to, value) {
        this.from = from;
        this.to = to;
        this.value = value;
    }

    toString() {
        return this.from+this.to+this.value;
    }

    toJson() {
        return {
            from : this.from,
            to : this.to,
            value : this.value
        }
    }
}

module.exports = {
    transaction : transaction
}