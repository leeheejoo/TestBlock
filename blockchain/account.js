const bitcoin = require('bitcoinjs-lib');

class account {

    constructor() {
        this.balance = 0;
    }

    getNewAddress() {

        if(this.address)
            return this.address;

        // random 방식으로 keypair 생성
        // transaction sign 기능을 구현하지 않을 예정이러 privite key를 저장하지 않음
        const btcKeyPair = bitcoin.ECPair.makeRandom()
        const btcAddress = bitcoin.payments.p2pkh({ pubkey: btcKeyPair.publicKey })

        this.address = btcAddress.address;

        // test를 위해 주소 생성시 100 coin 부여
        this.balance = 100;

        return this.address;
    }

    getAddress() {
        return this.address;
    }

    getBalance() {
        return this.balance;
    }

    setBalance(balance) {
        this.balance = balance;
    }
}

module.exports = {
    account : account
}