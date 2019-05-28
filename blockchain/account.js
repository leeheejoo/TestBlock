class account {

    constructor() {
        this.balance = 0;
    }

    getNewAddress() {

        if(this.address)
            return this.address;

        this.address = 'testAddress';

        return this.address;
    }

    getAddress() {
        return this.address;
    }

    getBalace() {
        return this.balance;
    }
}

module.exports = new account();