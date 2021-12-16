// //Exercise 1 part I
//
//
// function infoAboutMe(myInfo) {
//   console.log(myInfo);
//
// }
// infoAboutMe("my name is michael im from jerusalem and im 29 years old")

//part II

// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//   console.log(`your name is ${personName} you are ${personAge} your favorite color is ${personFavoriteColor}`);
//
//
// }
// infoAboutPerson("david", 45, "blue");
// infoAboutPerson("josh", 12, "yellow");


// Exercise 2

function calculateTip(){
  let userAnswer = prompt("john, whats the amount?");
  let userAnswer = parsint(userAnswer);
   if (userAnswer <= 50){
     userAnswer *= 0.2;

   }
   else if (userAnswer >= 50 && userAnswer<= 200) {
     userAnswer *= 1.5;
      userAnswer;

   }
   else if(userAnswer>200) {
     userAnswer *= 10;


   }


}
calculateTip()





// Exercise 3
//
// function isDivisible() {
//   for (var i = 0; i <= 500; i++) {
//
//   }
//
// }
