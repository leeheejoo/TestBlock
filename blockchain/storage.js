class storage {

    constructor() {
        this.blocks = new Map();
    }

    saveBlock(block) {
        this.blocks[block.hash] = block;
    }

    getBlock(hash) {
        return blocks[hash];
    }
}

module.exports = new storage();