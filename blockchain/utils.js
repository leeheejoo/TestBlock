
const bitcoin = require('bitcoinjs-lib');


function sha256(data) {
    let hash = bitcoin.crypto.sha256(Buffer.from(data));
    return hash.toString('hex');
}

// ripemd
function hash160(data) {
    let hash = bitcoin.crypto.ripemd160(Buffer.from(data));
    return hash.toString('hex');
}

// sha256 double hash
function hash256(data) {
    let hash = bitcoin.crypto.hash256(Buffer.from(data));
    return hash.toString('hex');
}

module.exports = {
    sha256 : sha256,
    hash160 : hash160,
    hash256 : hash256,
}