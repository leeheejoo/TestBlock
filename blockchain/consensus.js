const utils = require('./utils');

class consensus {

    constructor() {

    }

    pow(blockContent, difficultyBits) {

        let target = Math.pow(2,256-difficultyBits);
        let hash = utils.sha256(blockContent);
        let numHash = parseInt(hash, 16);
        if(target > numHash)
            return hash;
                        
        return '';
    }

    verifyBlock(){

    }
}

module.exports = {
    consensus : consensus
}