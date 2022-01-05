

function get(){
fetch('https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
  .then(response => response.json())
  .then(data => console.log(data));
  return response.json();
}


