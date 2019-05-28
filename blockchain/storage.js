const account = require('./account').account;
const block = require('./block').block;

class storage {

    constructor() {
        this.blocks = new Map();
        this.acconts = new Map();
    }

    saveBlock(block) {
        this.blocks[block.hash] = block;
    }

    getBlock(hash) {
        return blocks[hash];
    }

    addAccount(account) {
        this.acconts[account.address] = account;
    }

    saveBalance(address, balance) {
        this.acconts[address] += balance;
    }

    getBalance(address){

        if(this.acconts[address])
            return this.acconts[address].getBalance();

        throw new Error('No account information.');
    }
}

module.exports = {
    storage : storage
}