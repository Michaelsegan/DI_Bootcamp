let reqest = new XMLHttpRequest;

function downData() {
    reqest.open('GET','https://jsonplaceholder.typicode.com/users');
    reqest.responseType = 'json';
    reqest.send();
}
downData();
reqest.onload = function(){
    document.body.style.backgroundColor = "white";
    if (reqest.status != 200){
    console.log("error");

    }
    else {
        for (let i = 0; i < 4; i++) {
            console.log(reqest.response[0].name);
           let li =document.createElement('li')
           li.textContent = `${reqest.response[i].name}`;
           document.body.appendChild(li);
           
           

            
        }

    }
   

}


reqest.onprogress = function (event) {
    console.log("progress",reqest);

}


