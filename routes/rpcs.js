const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {

  res.rpc('getCoinbaseAddress', function(params, respond){

    try{
      let address = chain.getCoinbaseAddress();
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

  res.rpc('setCoinbaseAddress', function(params, respond){

    try{
      let address = params.address;
      chain.setCoinbaseAddress(address);

      respond(
        {
          result: 'success'
        }
      );
    }
    catch(e){
      respond({error:e});
    }

  });

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

  res.rpc('getBalance', function(params, respond){

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

  res.rpc('getAccounts', function(params, respond){

    try{
      let accounts = chain.getAccounts();

      respond(
        {
          result:  {
            accounts: accounts
          }
        }
      );
    }
    catch(e){
      respond({error:e});
    }

  });

  res.rpc('transfer', function(params, respond){
    try{

      let from = params.from;
      let to = params.to;
      let value = Number(params.value);

      if(from == undefined || from == '')
        throw new Error('There is no information from.');

      if(to == undefined || to == '')
        throw new Error('There is no information to.');

      if(value <= 0)
        throw new Error('Balances less than 0 can not be transferred.');

      let ret = chain.transfer(from,to,value);

      // transaction sign 기능을 구현하지 않아 txid를 생성하지 않음
      // 따라서 결과값을 txid(hash) 대신 success/fail로 대체

      respond(
        {
          result: ret? 'success':'fail'
        }
      );
    }
    catch(e){
      respond({error:e});
    }
  });

  res.rpc('getBlock', function(params, respond){
    try{
      let hash = params.hash;
      let block = chain.getBlock(hash);

      respond(
        {
          result:  {
            block: block
          }
        }
      );
    }
    catch(e){
      respond({error:e});
    }
  });

  // start는 1부터 시작
  res.rpc('getBlocks', function(params, respond){
    try{

      let start = params.start;
      let count = params.count;

      if(start == undefined || start < 1)
        throw new Error('Must be a start greater than 0.');

      if(count == undefined || count < 1)
        throw new Error('Must be a count greater than 0.');

      let blocks = chain.getBlocks(start,count);

      respond(
        {
          result:  {
            blocks: blocks
          }
        }
      );
    }
    catch(e){
      respond({error:e});
    }
  });

  res.rpc('getBlockHeight', function(params, respond){
    try{
      let height = chain.getBlockHeight();

      respond(
        {
          result:  {
            height: height
          }
        }
      );
    }
    catch(e){
      respond({error:e});
    }
  });


  res.rpc('generateBlock', function(params, respond){
    try{
      let hash = chain.generateBlock();

      respond(
      {
        result:  {
            hash: hash
          }
        }
      );
    }
    catch(e){
      respond({error:e});
    }
  });

  res.rpc('verifyChain',  function(params, respond){

    try{
    
      let result = chain.verifyChain();

      respond(
        {
          result: result
        }
      );
    }
    catch(e){
      respond({error:e});
    }

  });

});

module.exports = router;
