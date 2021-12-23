// //
// // //Exercis 1 Part I
// //
// //
// // let people = ["Greg", "Mary", "Devon", "James"]
// // people.shift();
// //
// // people.splice(2,1,"jason");
// //
// // people.push("michael");
// //
// // console.log(people);
// //
// // console.log(people.indexOf("Mary"));
// //
// // console.log(people.slice(1,-1));
// //
// // console.log(people.indexOf("foo")); // it's doesn't matter what kind of string we drop inside if its not an ite from the array the callculation will be -1
// //
// // let last = people[people.length - 1];
// //
// //
// // // Part II
// //
// // for (let i=0; i<people.length; i++){
// //
// //   if(people[i]=="jason"){
// //     break
// //   }
// // console.log(people[i]);
// // }
//
// //Exercise 2
//
// let colors = ["blue", "red","yellow", "black","green"];
//
// for (let n = 0; n <= 4; n++){
// 	console.log(`my ${n}# choice:`);
// 	console.log(colors[n]);
// }


// Exercis 3
//
// let userAnswer = prompt("give a number:")
// userAnswer = parseInt(userAnswer);
//
// while (userAnswer <10) {
//   userAnswer = prompt("higher:");
//
//
// }

//Exercis 4

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

console.log(`${building["numberOfAptByFloor"]["firstFloor"]}`);
console.log(`${building["numberOfAptByFloor"]["secondFloor"]}`);
