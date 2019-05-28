const storage = require('./storage').storage;
const account = require('./account').account;

class chain {

    constructor() {
        this.storage = new storage();
    }

    makeAccount() {
        let acc = new account();
        let address = acc.getNewAddress();
        this.storage.addAccount(acc);
        
        return address;
    }

    getBalance(address) {
        return this.storage.getBalance(address);
    }
}

module.exports = new chain();