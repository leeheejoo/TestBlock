const account = require('./account');
const transactions = require('./transaction');

class block {

    constructor() {
        this.hash = '';
        this.prevHash = '';
        this.nonce = 0;
        this.transactions = [];
        this.accounts = [];
        this.timeStamp = new Date().getTime();
    }

    addTransaction(transaction) {
        this.transactions.push(transaction);
    }

    addAccount(account) {
        this.accounts.push(account);
    }

    getContent() {
        let contents = this.prevHash + this.nonce.toString();

        this.transactions.forEach(tx => {
            contents += tx.toString();
        });

        this.accounts.forEach(acc => {
            contents += acc.getAddress();
        });

        contents += this.timeStamp;

        return contents;
    }
}

module.exports = {
    block : block
}