const transactions = require('./transaction').transaction;

class block {

    constructor() {
        this.hash = '';
        this.prevHash = '';
        this.nonce = 0;
        this.transactions = [];
        this.timeStamp = 0;
    }

    setHash(hash) {
        this.hash = hash;
    }

    getHash() {
        return this.hash;
    }

    setPrevHash(hash) {
        this.prevHash = hash;
    }

    getPrevHash() {
        return this.prevHash;
    }

    setNonce(nonce) {
        this.nonce = nonce;
    }

    getNonce() {
        return this.nonce;
    }

    addTransaction(transaction) {
        this.transactions.push(transaction);
    }

    addTransactions(transactions) {
        this.transactions = this.transactions.concat(transactions);
    }

    getTransactions() {
        return this.transactions;
    }

    setTimeStamp(timeStamp) {
        this.timeStamp  = timeStamp;
    }

    getTimeStamp() {
        return this.timeStamp;
    }

    getContent() {

        let contents = this.prevHash + this.nonce.toString();

        this.transactions.forEach(tx => {
            contents += tx.toString();
        });

        contents += this.timeStamp;

        return contents;
    }
}

module.exports = {
    block : block
}