const express = require('express');
const app = express();
const fs = require('fs');


app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
  }))
  app.post('./submit-form', (req, res) => {
    console.log('hello');
    const type = req.body.type
    console.log(type);

    res.end()
  })
app.listen(7000,()=>{
    console.log('listenning');
})