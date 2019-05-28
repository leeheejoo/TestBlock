let assert = require("assert");
let account = require("../blockchain/account").account;
let block = require("../blockchain/block").block;

describe('test', function() {

	describe('account test', function() {

		it('getNewAddress', function() {
            
            let acc1 = new account();
            let addresss = acc1.getNewAddress();

            console.log(addresss);
        });
        
	});

	describe('block test', function() {

		it('create test', function() {
            
            let block1 = new block();
            let content = block1.getContent();

            console.log(content);
        });
        
	});
});