//  Exersice 1


let change = document.getElementById('navBar').id = "socialNetworkNavigation";
let li = document.createElement('li');
let logOut = document.createTextNode('LogOut');
li.appendChild(logOut);
let ul = document.querySelector("ul");
ul.appendChild(li)

let callFirst = document.getElementById('socialNetworkNavigation');
console.log(callFirst);

let ul2 = callFirst.firstElementChild;
console.log(ul);

let li2 = ul2.lastElementChild;
console.log(li2);
