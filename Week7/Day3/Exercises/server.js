
//1. 


const express = require('express');

const app = express();

app.use((re,res,next)=>{
    console.log('some text to see');
    next();
})

app.get('/',(req, res) => {

    res.send('');
});
app.listen(3000);


//2. 

const fs = require('fs');

fs.writeFile('hello','hello Aichay',function(err){
    console.log('somthing');
})

// //3. 

fs.appendFile('hello', 'adding new data', function (err) {
  if (err) {
    // append failed
  } else {
    // done
  }
})


//3. 
const path = './hello';
fs.unlinkSync(path)


