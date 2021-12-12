// Exerciese 1- Youre favourite food

let favouriteFood = "pizza";
let favouriteMeal = "dinner";
let myDinner = `i eat ${favouriteFood} at every ${favouriteMeal}`;
console.log(myDinner);

// Exerciese2 - series

let watchedSeries = ["black mirror", "money heist", "the big bang theory"];
let watchedSeriesLength = 3;
let myWatchedSeries = `${watchedSeries[0]},${watchedSeries[1]} and ${watchedSeries[2]}`;
watchedSeries.splice(2,1,"friends");
watchedSeries.push("mr robot");
watchedSeries.unshift("working moms");
watchedSeries.splice(1,1);
console.log(watchedSeries);
console.log(watchedSeries[1].charAt(2));

//Exerciese3- The temp convertor

let celsiusTemp = 20;
let fahrenheit = (20*9)/5+32;
console.log(`${celsiusTemp} is ${fahrenheit}`);

//Exerciese4- Guess the answers

let c;
   let a = 34;
   let b = 21;

   console.log(a+b); //1.  first expression
   // Prediction:it will output 55
   // Actual:

   a = 2;

   console.log(a+b); //2.  second expression
   // Prediction: it will be 23 because the a variable has changed
   // Actual:23

   // the value of c is not undefined
   console.log(3 + 4 + '5'); // the out come will be 75 because "5" is a string , it will atach to the calculation of the int




//Exercise 5-  Guess the answers #2

console.log(typeof 15);
// Prediction:number
// Actual:number because its a nuber

console.log(typeof 5.5);
// Prediction: number
// Actual: number 5.5 its a kind og number

console.log(typeof NaN);
// Prediction: will be error
// Actual:didnt defind nothing

console.log(typeof "hello");
// Prediction:string
// Actual: hello is a string

console.log(typeof true);
// Prediction: boolean
// Actual: true refers to a boolean true or false


console.log(typeof 1 !=2);
// Prediction: boolean
// Actual:true

console.log(typeof "hamburger" + "s");
// Prediction: strings
// Actual:two kinds of springs


console.log(typeof "hamburgers" - "s");
// Prediction: strings
// Actual:NaN i didnt know it


console.log(typeof "1"-"3");
// Prediction: string
// Actual: NaN because its a numbers wearing strings

console.log(typeof "johnny" + 5);
// Prediction: string +5
// Actual:string5

console.log(typeof "johnny" - 5);
//Prediction: NaN
//Actual: NaN same as above

console.log(typeof 99 * "hello");
//Prediction: NaN
//Actual:NaN same as above

console.log(typeof 1 != 1);
//Prediction: true
//Actual:true its a type of boolean so its true

console.log(typeof 1 == "1");
//Prediction: NaN
//Actual:false

console.log(typeof 1 == "1");
//Prediction: true
//Actual:false



// Exerciese-6  Guess the answers #3


console.log(5 + "34");
// Prediction:534
// Actual:number connect to a string without calculation

console.log(5 - "4");
// Prediction:5
// Actual:1

console.log(10 % 5);
// Prediction: 0.5
// Actual:0

console.log("java"+ "script");
// Prediction: javascript
// Actual:javascript two string connect to ech other

console.log(" " + " ");
// Prediction: nothing
// Actual:non visble valsue exectuted due the fact there is nothing in the strings

console.log(" " + 0);
// Prediction:0
// Actual:0 no value to the string with valuof number

console.log(true + false);
// Prediction:truefalse
// Actual:1

console.log(false + true);
//Prediction: 1
// Actual: 1 same as the above different order

console.log(false - true);
//Prediction: -1
//actual: diffrent direction of calculatin breengs diffrent reusualt

console.log(!true);
//Prediction: false
//Actual:false because ! means "not"

console.log(3-4);
//Prediction: -1
//actual:-1 due calculatins

console.log("bob"- "bill");
//Prediction: NaN
//actual: no calculatin can exectuted
