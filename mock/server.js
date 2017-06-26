let express = require('express');
let ad = require('./home/ad');
let list = require('./home/list');
let info = require('./detail/info');
let comment = require('./detail/comment');
let app =express();

app.get('/api/ad',(req,res)=>{
    res.send(ad)
});

app.get('/api/list/:city/:page',(req,res)=>{
   res.send(list);
});

app.get('/api/detail/info/:id',(req,res)=>{
    console.log(req.param.id);
   res.send(info);
});

app.get('/api/detail/comment/:id/:page',(req,res)=>{
    res.send(comment);
});

app.listen(3000);