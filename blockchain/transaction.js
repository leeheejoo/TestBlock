class transaction {

    constructor(from, to, value) {
        this.form = from;
        this.to = to;
        this.value = value;
    }

    toString() {
        return form+to+value;
    }

    toJson() {
        return {
            from : this.form,
            to : this.to,
            value : this.value
        }
    }
}

module.exports = {
    transaction : transaction
}