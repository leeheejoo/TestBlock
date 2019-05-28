const storage = require('./storage').storage;
const account = require('./account').account;
const transaction = require('./transaction').transaction;
const mining = require('./mining').mining;

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
        let tx = new transaction(from,to,value);
        this.storage.addTransaction(tx);
        return true;
    }

    getBlock(hash){
        return this.storage.getBlock(hash);
    }

    getBlockHeight(){
        return this.storage.getBlockHeight();
    }

    generateBlock(){
        
        let mg = new mining(this.coinbase,this.storage);

        // genesys block 생성
        if(this.getBlockHeight() == 0){
            return mg.generateGenesysBlock();
        }
        else{
            return mg.generateBlock();
        }
    }
}

module.exports = new chain();