const utils = require('./utils');
const storage = require('./storage').storage;

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

  verifyChain(storage){

    let ret = {
      result : "success",
      details : []
    }

    let blocks = storage.getAllBlocks();
    let prevHash = '';

    for(let i=0; i < blocks.length; i++){

      let block = blocks[i];

      block.setPrevHash(prevHash);

      let blockHash = block.getHash();
      let blockContent = block.getContent();
      let verifyHash = utils.sha256(blockContent);

      ret.details.push({
        height : i+1,
        blockHash : blockHash,
        verifyHash : verifyHash
      })

      if(blockHash != verifyHash){
        ret.result = "fail";
        break;
      }

      prevHash = verifyHash;
    }

    return ret;
  }
}

module.exports = {
  consensus : consensus
}