//Exercise 1

let x = 5;
let y = 2;

if (x > y) {

  console.log("yes");
}

else {

console.log("no");

}

Exercise 2

let newDog = "chihuahua";
console.log(newDog.length);
console.log("newDog".toUpperCase());
console.log("newDog".toLowerCase());

if (newDog == "chihuahua"){
  alert("I love Chihuahuas, it’s my favorite dog breed");
}

else {
  console.log("I dont care, I prefer cats");
}

Exercise 3 : Even or odd

let userNumber = prompt("Pleas write a number");

if (userNumber == 1){
  console.log("1 is an even number");
}
else {
  console.log(`${userNumber} is not an even number`);
}


Exercise 4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
let length = users.length;

if (users.length == 0) {
  console.log("no one is online");
}

else if (users.length == 1) {
console.log(`${users[0]} is online`);


}

else if (users.length == 2) {
  console.log(`${users[0]} and ${users[1]} are online`);

}
else if (users.length > 2) {
  console.log(`${"Lea123"},${"Princess45"} and 3 more are on`);




}
