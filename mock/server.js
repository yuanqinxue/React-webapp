let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let ad = require('./home/ad');
app.get('/api/ad', (req, res) => {
    res.send(ad)
});

let list = require('./home/list');
app.get('/api/list/:city/:page', (req, res) => {
    res.send(list);
});

let info = require('./detail/info');
app.get('/api/detail/info/:id', (req, res) => {
    console.log(req.param.id);
    res.send(info);
});

let comment = require('./detail/comment');
app.get('/api/comment/:id/:page', function (req, res) {
    res.send(comment);
});

let orderList = require('./orderlist/orderList');
app.get('/api/orderlist/:username', function (req, res) {
    res.send(orderList);
});

app.post('/api/comment',(req,res)=>{
    res.send({msg:'ok'});
});

app.listen(3002);