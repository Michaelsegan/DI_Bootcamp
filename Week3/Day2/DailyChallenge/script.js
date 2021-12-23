let nodeList = document.querySelectorAll("ul li input");
let libButton = document.getElementById('lib-button');
libButton.addEventListener('click', clickToretrive);
function clickToretrive (){
  let noun = document.getElementById('noun').value;
  let adjective = document.getElementById('adjective').value;
  let person = document.getElementById('person').value;
  let verb = document.getElementById('verb').value;
  let place = document.getElementById('place').value;
  let story = document.getElementById('story').value;
  let newtext = document.createTextNode();
  story.appendChild(newtext);
}



