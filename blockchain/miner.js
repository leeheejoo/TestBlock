const block = require('./block').block;
const transaction = require('./transaction').transaction;
const storage = require('./storage').storage;
const config = require('../config/config');
const consensus = require('./consensus').consensus;

class miner {

    constructor(coinbase, storage) {
        this.coinbase = coinbase;
        this.storage = storage;
        this.consensus = new consensus();
    }

    generateBlock(){

        let gBlock = new block();

        //genesys block          
        if(this.storage.getBlockHeight() == 0)
            gBlock.setPrevHash('');                     
        else
            gBlock.setPrevHash(this.storage.getCurrentBlock().getHash());

        //coinbase tx
        let coinbaseTx = new transaction('', this.coinbase, config.blockReward);
        gBlock.addTransaction(coinbaseTx);
        //select tx
        gBlock.addTransactions(this.storage.getTransactions());

        let hash = '';

        while(true){

            //set block create time
            gBlock.setTimeStamp(new Date().getTime());
            //nonce increse
            gBlock.increaseNonce();

            let blockContent = gBlock.getContent();
            hash = this.consensus.pow(blockContent);
            
            if(hash != ''){
                gBlock.setHash(hash);
                break;
            }
        }

        this.storage.addBlock(gBlock);

        // account balance update
        gBlock.getTransactions().forEach(tx => {
            
            let from = tx.getFrom();
            let to = tx.getTo();
            let value = tx.getValue();

            if( from != ''){
                this.storage.appendBalance(from,value);
            }
            
            if( to != ''){
                this.storage.appendBalance(to,value);
            }
        });

        console.log(`New block created by hashing ${gBlock.getNonce()} times.`);
     
        return hash;
    }
}

module.exports = {
    miner : miner
}