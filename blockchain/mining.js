const block = require('./block').block;
const storage = require('./storage').storage;
const utils = require('./utils');

class mining {

    constructor(coinbase, storage) {
        this.coinbase = coinbase;
        this.storage = storage;
    }

    generateGenesysBlock(){
        let gBlock = new block();
        gBlock.setPrevHash('');
        gBlock.addTransactions(this.storage.getTransactions());
        gBlock.setTimeStamp(new Date().getTime());
        // nonce
 
        let blockContent = gBlock.getContent();
        let hash = utils.hash256(blockContent);
        gBlock.setHash(hash);

        this.storage.addBlock(gBlock);

        return hash;
    }

    generateBlock(){

    }

}

module.exports = {
    mining : mining
}