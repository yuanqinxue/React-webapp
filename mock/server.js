let express = require('express');
let ad = require('./home/ad');
let list = require('./home/list');
let app =express();

app.get('/api/ad',(req,res)=>{
    res.send(ad)
});

app.get('/api/list/:city/:page',(req,res)=>{
   res.send(list);
});

app.listen(3000);