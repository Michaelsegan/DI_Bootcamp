// // //Exercise 1 : Function With Two Parameters


// // let fungshwei = (num1,num2) => num1 + num2;
// // console.log(fungshwei(3,6));



// // Exercise 2 : Closure
// // Instructions
// // //Analyse the code below, and before executing it, predict the outcome of the last line.


// const addTo = x => y => x + y;
// var addToTen = addTo(10);
// addToTen(3);
// console.log(addToTen(3));




//Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.

//Change the code below to nested arrow functions.


let landscape = function() {

 let result = "";

//  let flat = function(x) {
//    for(let count = 0; count<x; count++){
//      result = result + "_";
//    }
//  }
let flat = x => result + "_";




 let mountain = function(x) {
   result = result + "/"
   for(let counter = 0; counter<x; counter++){
     result = result + "'"
   }
   result = result + "\\"
 }




 flat(8);
 mountain(8);
 flat(8)

 return result;
}

landscape();
console.log(landscape());

// the out come will be a mountain of punctuation marks , 
