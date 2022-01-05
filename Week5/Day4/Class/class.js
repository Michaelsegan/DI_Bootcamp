 async function word() {
    const response = await fetch("http://random-word-api.herokuapp.com/word?number=1")
      const jsData =  await response.json()
      let body = document.body;
      

        body.innerText = jsData[0];
        exercise(jsData[0]);
      
  }
  
  async function exercise(test) {
    
     const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=%22${test}%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)

        if (response.status == 200) {
         jsData = await response.json();
        } else {
          throw new Error("not 200");
        }
      
        let body = document.body;
        body.append(jsData.data.images.original.url);

      if (response.status != 200) {((error) => {
        
        console.log("In the catch", error);

        let img = document.createElement("img");
        img.setAttribute(
          "src",
          "https://i.pinimg.com/originals/13/3d/62/133d62f4c7611596b265b81bfb9be08c.gif"
        );
        body.append(img);
      })};
  }
  exercise ("str");
  
  function append(url) {
    let body = document.body;
    let img = document.createElement("img");
    img.setAttribute("src", url);
    body.append(img);
  }
  
  word();