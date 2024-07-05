const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, My Server!');
});

router.get('/getdata', (req, res) => {
  const data = req.query.number;
  let result = '';
  if(!data){
    result = 'Lack of Parameter';
  }else if(isNaN(data)){
    result = 'Wrong Parameter';
  }else{
    let sum =0;
    for( let i=1; i<=data; i++){
      sum+=i;
    }
    result =sum;
  }
    res.send(result.toString());
});

module.exports = router;  