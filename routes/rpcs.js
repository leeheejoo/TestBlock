const express = require('express');
const router = express.Router();

router.post('/', async function(req, res, next) {

	res.rpc('getNewAddress', async function(params, respond){
		respond({'result': 'success'});
	});

	res.rpc('getBalance', async function(params, respond){
		respond({'result': 'success'});
	});
	
	res.rpc('transfer', async function(params, respond){
		respond({'result': 'success'});
	});
	
	res.rpc('generateBlock', async function(params, respond){
		respond({'result': 'success'});
  });
	
	res.rpc('verifyBlock', async function(params, respond){
		respond({'result': 'success'});
	});
	
});

module.exports = router;
