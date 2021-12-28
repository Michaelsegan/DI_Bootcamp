// // let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

// // // Exersice 1

// // let filterThem = numbers.filter((elem,index) => elem >0 );


// // console.log(filterThem);

// // Exersice 2

// const characters = [
//     { name: 'James T. Kirk', series: ['Star Trek'] },
//     { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
//     { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
//     { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
//  ];


// let onlyNextGen = characters.filter((elem, index) => {



// } )
 // i did 
const students = [
    {name: 'Rich', score: 33}, 
    {name: 'Peter', score: 55},
    {name: 'John', score: 75}
];

let sumScores = students.reduce((accum,current) => {
return accum+ current.score;

},0)

console.log(sumScores);

// she did

