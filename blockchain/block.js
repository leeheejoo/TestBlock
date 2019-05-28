const account = require('account');
const transactions = require('transactions');

class block {

    constructor() {
        this.hash = '';
        this.prevHash = '';
        this.nonce = 0;
        this.transactions = [];
        this.accounts = [];
        this.timeStamp = Date().getTime();
    }

    addTransaction(transaction) {
        this.transactions.push(transaction);
    }

    addAccount(account) {
        this.accounts.push(account);
    }

    getContent() {
        let contents = this.prevHash + nonce.toString();

        this.transactions.forEach(tx => {
            contents += tx.toString();
        });

        this.accounts.forEach(acc => {
            contents += acc.toString();
        });

        contents += this.timeStamp;

        return contents;
    }
}

module.exports = new block();