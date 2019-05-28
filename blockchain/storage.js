const account = require('./account').account;
const block = require('./block').block;
const transaction = require('./transaction').transaction;

class storage {

    constructor() {
        this.blocks = [];
        this.blockCache = new Map();
        this.accounts = new Map();
        this.txPool = [];
    }

    addBlock(block) {
        this.blocks.push(block);
        this.blockCache.set(block.hash,block);
    }

    getBlock(hash) {
        
        if(this.blockCache.has(hash))
            return this.blockCache.get(hash);

        throw new Error('No block information.');
    }

    getCurrentBlock(){
        if(this.blocks.length > 0)
            return this.blocks[this.blocks.length-1];

        throw new Error('No block information.');
    }

    getBlockHeight() {
        return this.blocks.length;
    }

    addAccount(account) {
        this.accounts.set(account.address,account);
    }

    getAccounts() {
        return Array.from(this.accounts.values());
    }

    saveBalance(address, balance) {
        this.accounts[address] += balance;
    }

    getBalance(address){

        if(this.accounts.has(address))
            return this.accounts.get(address).getBalance();

        throw new Error('No account information.');
    }

    setBalance(address,balance){

        if(this.accounts.has(address))
            return this.accounts.get(address).setBalance(balance);

        throw new Error('No account information.');
    }

    addTransaction(transaction){
        this.txPool.push(transaction);
    }

    getTransactions() {
        return this.txPool;
    }

    clearTxPool(){
        this.txPool = [];
    }
}

module.exports = {
    storage : storage
}