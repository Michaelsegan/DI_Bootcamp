const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const urlencodedpaParser = bodyParser.urlencoded({ extended: false })

app.post('/index',urlencodedpaParser, function(req, res) {
    console.log(req.body);
    res.render('/index',{qs: req.query})
})

