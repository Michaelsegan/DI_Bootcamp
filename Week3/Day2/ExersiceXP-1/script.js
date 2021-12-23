
//1
let h1Elem = document.querySelector('h1');
let goArticle = document.querySelector('article');

//2
let goLastChild = goArticle.lastElementChild;
goLastChild.remove();

//3

let h2BackRound = document.getElementById('h2backround');

console.log(h2BackRound);

h2BackRound.addEventListener('click',clickToChange);

function clickToChange  () {
    h2BackRound.style.backgroundColor = "orange";
}


//4

let disapear = document.querySelector('h3');
// console.log(disapear);
disapear.addEventListener('click',disapearClick);
function disapearClick () {
    disapear.remove();

}

// 5
let body = document.body;
let newBtn = document.createElement('button');
let texBtn = document.createTextNode('makeItBold');
newBtn.appendChild(texBtn);
body.appendChild(newBtn);

newBtn.addEventListener('click',boldEverything);
function boldEverything () {
    body.style.fontWeight = '900';
}

