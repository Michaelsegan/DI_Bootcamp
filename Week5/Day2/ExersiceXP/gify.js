//Exercise 1

let req = new XMLHttpRequest;

function getIt(){
    req.open('GET','https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
    req.responseType = 'json';
    req.send();
    req.onload = function(){
        console.log(req.response)
    }
    
}

getIt();


//Exersice 2

