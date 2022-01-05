//Exersice 1- the Conversion

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);


//THE CONVERSION IT SELF

  async function convert (){
    const url = await fetch("https://swapi.dev/api/starships/9/")
    const data = await url.json()
    console.log(data);
  }
  convert();

  //Exercise 2: Analyze

// the second function will be ivoked first and then the first one

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
    

