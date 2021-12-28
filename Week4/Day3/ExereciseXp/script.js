// // // // // Exercise 1 : Analyzing
// // // // // Instructions
// // // // // Analyze these pieces of code before executing them. What will be the outputs ?
// // // // // ------1------
// // const fruits = ["apple", "orange"];
// // const vegetables = ["carrot", "potato"];

// // const result = ['bread', ...vegetables, 'chicken', ...fruits];
// // console.log(result);
// // //my guess: the result will consolog the two arry + added strings.

// // // // // ------2------
// // const country = "USA";
// // console.log([...country]);

// // //my guess: the result of the log will spread all the letters of the word


// // // ------Bonus------
// // let newArray = [...[,,]];
// // console.log(newArray);
// // //my guess: it will be undefined because there is no other array.



// // // let letters = ["a","b","c"];
// // // let numbers = [1,2,3];
// // // let newArr = [...letters, ...numbers]
// // // console.log(newArr);

// // // //my guess: the two arrays will combiend together;



// //Exercise 2 : Employees

// let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

//  let arr = users.map((elem) => console.log("hello",elem.firstName));




//Exercise 3 : Star Wars


//  let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
 
 
//  let mishpat =  epic.reduce((accumulator, currentValue) => {
//  return accumulator+currentValue+ " ";
// },)
// console.log(mishpat);


// Exercise 4 : Employees #2


let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let newArr = student.filter(pass => pass.isPassed != false);
  console.log(newArr);