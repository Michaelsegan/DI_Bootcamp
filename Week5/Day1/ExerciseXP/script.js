// Exersice 1 - the data will appear in the search bar


//Exercise 2- the data will appear in th network tab 


//Exersice 3 



let marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }


  let tojson = JSON.stringify(marioGame,null,2);
  console.log(tojson);