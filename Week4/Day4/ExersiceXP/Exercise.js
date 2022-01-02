//Exersice 1


// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// name will be defind cty will be vancouver and let an lng will stay the same


//Exersice 2




// function displayStudentInfo({first: nameOfHer, last: lastNameOfHer}) {
//     console.log(nameOfHer,lastNameOfHer);
    

// }
// displayStudentInfo ({first: "sima",last: "kahalani"})


//Exercise 3


// Part one
const users = {
     user1: 18273,
     user2: 92833,
     user3: 90315 };

const x = Object.entries(users);


x.forEach(number => console.log(number[0],number[1]*2));

//Part two












//Exersice 4- analayiz

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);

// the result will be an object.




//Exercise 5 
// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };
  
  //Analyze the options below. Which constructor will successfully extend the Dog class?
  
  // 1
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };
  
  
//     // 2
//   class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };
  
  
//     // 3
//   class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };
  
  
//     // 4
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };



  ///Exersice 5


  //part 1

  //Evaluate these (ie True or False)

// [2] === [2] 
// {} === {}
// two off them will be false


// class Animal {
// constructor (name,type,color){
//     this.name = name;
//     this.type = type;
//     this.color = color;
// }

// }

// class  Mamal extends Animal {
//     constructor (name,type,color){
//     super (name,type,color);
//     sound (muuuu);
    
    

//     }
//     play (){
        
//     }
    
// }

// let mamal1 = new Mamal("britnu","cow");