const fs = require('fs');

//copy

fs.copyFile('/abc','./abcd', (err)=>{
    if(err){
        console.log(err);
    }
    console.log('file was copied');
})


//delete
// fs.unlink('./data',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('file deleted');
// })



//append - adds to a file but dosent rewrite on it
// let txt = 'hellpppppp';
// fs.appendFile('./abc', txt, (err, data) => {
//     if(err){
//         console.log(err);
//     }
// })

// write to file

// let arr = [
//     {name:'michael'},
//     {name:'yotam'},
//     {name:"ziv"}
// ]
// fs.writeFile('./hello.txt',JSON.stringify(arr),err => {
//     if(err) {
//         console.log(err);
//     }
// })


//read from file system

// fs.readFile('./data',(err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data.toString());
//     }
// })
// console.log('before');
// cosnt = fs.readfileasync('./data');
// console.log(f.toString());