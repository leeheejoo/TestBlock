const block = require('./block').block;
const transaction = require('./transaction').transaction;
const storage = require('./storage').storage;
const utils = require('./utils');

class mining {

    constructor(coinbase, storage) {
        this.coinbase = coinbase;
        this.storage = storage;
        this.blockReward = 100;
    }

    generateBlock(){

        let gBlock = new block();

        if(this.storage.getBlockHeight() == 0)
            gBlock.setPrevHash('');                     //genesys          
        else
            gBlock.setPrevHash('current block hash');

        //coinbase tx
        let coinbaseTx = new transaction('', this.coinbase, this.blockReward);
        gBlock.addTransaction(coinbaseTx);
        gBlock.addTransactions(this.storage.getTransactions());
        gBlock.setTimeStamp(new Date().getTime());
        // nonce
        let blockContent = gBlock.getContent();
        let hash = utils.hash256(blockContent);
        gBlock.setHash(hash);

        this.storage.addBlock(gBlock);

        gBlock.getTransactions().forEach(tx => {
            
            let from = tx.getFrom();
            let to = tx.getTo();
            let value = tx.getValue();

            if( from != ''){
                this.storage.setBalance(from,value);
            }
            
            if( to != ''){
                this.storage.setBalance(to,value);
            }
        });
     
        return hash;
    }
}

module.exports = {
    mining : mining
}