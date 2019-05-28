let assert = require("assert");
let account = require("../blockchain/account").account;
let block = require("../blockchain/block").block;
let utils = require("../blockchain/utils");

describe('test', function() {

	describe('account test', function() {

		it('getNewAddress', function() {
            
            let acc1 = new account();
            let addresss = acc1.getNewAddress();

            //console.log(addresss);
        });
        
	});

	describe('block test', function() {

		it('create test', function() {
            
            let block1 = new block();
            let content = block1.getContent();

            //console.log(content);
        });
        
    });
    
    describe('hash test', function() {

		it('sha256 test', function() {
            
            let data = 'testtest';
            let hash = utils.sha256(data);

            console.log(hash);
        });

        
		it('hash160 test', function() {
            
            let data = 'testtest';
            let hash = utils.hash160(data);

            console.log(hash);
        });

        
		it('hash256 test', function() {
            
            let data = 'testtest';
            let hash = utils.hash256(data);

            console.log(hash);
        });
        
	});
});