let contain = document.getElementById('container');
let btn = document.getElementById('btn');
btn.addEventListener('click',take);

function take (){

let type = document.getElementById('type').value;
let amount = document.getElementById('amount').value;
let container = document.getElementById('container');
let para = document.createElement('p');
let text = document.createTextNode(`${type} - ${amount}`);
para.appendChild(text);
container.appendChild(para);

}




