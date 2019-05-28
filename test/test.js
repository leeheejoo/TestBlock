let assert = require("assert");
let block = require("../blockchain/block").block;

describe('test', function() {

	describe('block test', function() {

		it('create test', function() {
            
            let block1 = new block();
            let content = block1.getContent();

            console.log(content);
        });
        
	});
});