const storage = require('./storage').storage;
const account = require('./account').account;
const transaction = require('./transaction').transaction;
const miner = require('./miner').miner;

class chain {

    constructor() {
        this.storage = new storage();

        // conbase account 생성
        let address = this.makeAccount();
        this.coinbase = address;
    }

    getCoinbaseAddress(){
        return this.coinbase;
    }

    setCoinbaseAddress(address){
        this.coinbase = address;
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

    getAccounts() {
        return this.storage.getAccounts();
    }

    transfer(from, to, value){

        try{
      
            if(this.getBalance(from) >= value){
                let tx = new transaction(from,to,value);
                this.storage.addTransaction(tx);
                return true;
            }
        }
        catch(e){
            throw new Error('There is not enough balance.');
        }

    }

    getBlock(hash){
        return this.storage.getBlock(hash);
    }

    getBlockHeight(){
        return this.storage.getBlockHeight();
    }

    generateBlock(){
        
        let mining = new miner(this.coinbase,this.storage);
        return mining.generateBlock();
    }
}

module.exports = new chain();