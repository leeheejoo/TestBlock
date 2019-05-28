const express = require('express');
const router = express.Router();

router.post('/', async function(req, res, next) {

	res.rpc('getNewAddress', function(params, respond){

		try{
			let address = chain.makeAccount();
			respond(
				{
					result:  {
						address: address
					}
				}
			);
    }
		catch(e){
			respond(e);
		}

	});

	res.rpc('getBalance', async function(params, respond){

		try{
			let address = params.address;
			let balance = chain.getBalance(address);

			respond(
				{
					result:  {
						address: address,
						balance: balance
					}
				}
			);
    }
		catch(e){
			respond({error:e});
		}

	});
	
	res.rpc('transfer', async function(params, respond){
		respond({result: 'success'});
	});
	
	res.rpc('generateBlock', async function(params, respond){
		respond({result: 'success'});
  });
	
	res.rpc('verifyBlock', async function(params, respond){
		respond({result: 'success'});
	});
	
});

module.exports = router;
