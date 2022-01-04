let form = document.getElementById('form');
form.addEventListener('submit',getGif);






function getGif (e){
    e.preventDefault();
    let value = document.getElementById('input').value;
    // console.log(value);
    let request = new XMLHttpRequest;
    function downData() {
        request.open('GET',`https://api.giphy.com/v1/gifs/search?q=${value}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
        request.responseType = 'json';
        request.send();

        request.onload = function (){
            if (request.status != 200) {
                console.log("error");
            }
            else {
                console.log(request.response);
                let random = Math.floor(Math.random() * request.response.data.length);
                let data = request.response.data[random].images.original.url;
                let img = document.createElement('img');
                  img.src = data;
                  document.body.append(img);

            }
        }
        

    
    }
    downData();
}