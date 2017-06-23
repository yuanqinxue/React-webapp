let express = require('express');
let ad = require('./home/ad');
let app =express();

app.get('/api/ad',(req,res)=>{
    res.send(ad)
});

app.listen(3000);