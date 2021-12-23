let input = document.getElementById('text');
let node =document.createTextNode("");
input.appendChild(node);
input.addEventListener('keyup', makeItDisapear);
function makeItDisapear (e){
    if ( e.keyCode >= 65 && e.keyCode <= 90  ) {
        
    }
    else if (e.keyCode >= 8 && e.keyCode <= 57 && e.keyCode >= 91)
        arra.remove();

}
