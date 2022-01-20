const fs = require('fs');


const array = fs.readFileSync('text.txt').toString().split('/,n');
for(i in array) {
    console.log(array[i]);
}