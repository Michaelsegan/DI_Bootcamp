let stars = ["moon", "jupiter","earth","sun"]

for (let i = 0; i < stars.length; i++) {
  let divs = document.createElement("div");
  divs.setAttribute("class", "planet");
let insideDiv = document.createTextNode(stars[i]);
divs.appendChild(insideDiv);
console.log(divs);






    
    
    

    
}
