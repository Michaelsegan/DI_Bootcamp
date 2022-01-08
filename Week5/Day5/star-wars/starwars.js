

let container = document.getElementById('container');
let btn = document.getElementById('btn');
let spinner = document.getElementById('spinner');
let piska = document.createElement('p');
piska.style.color = "white";
container.appendChild(piska);




 btn.addEventListener('click',takeCharcter);
    async function takeCharcter () {
        try {
            const min = Math.ceil(80)
            const Max = Math.floor(1)
            
            const characterRes = await fetch(`https://www.swapi.tech/api/people/${Math.floor(Math.random() * (Max - min + 1) + min)}`);
        
            console.log(characterRes);
            
            if (characterRes.status === 200){
                const dataSelf = await characterRes.json();
                const data = dataSelf.result.properties;
                piska.innerHTML = `<i class="fas fa-stroopwafel fa-spin" id="spinner"></i>`;
                console.log(data);
                presentHtml(data);
            } else {
                throw new Error("oh no!character not available");

            }
        } catch (m) {piska.innerHTML = m.message}
        

    
  }

  async function presentHtml(data){
    const urlHome = data.homeworld;
    const url = await fetch(urlHome);
    const urlToJson = await url.json();

    piska.innerHTML = `<h2>${data.name}</h2><br>
                           Height:${data.height}<br>
                           Gender:${data.gender}<br>
                           BirthDay:${data.birthyear}
                           Home:${urlToJson.result.properties.name}`;
  }
  

