  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}

console.log(results);

// Using map()
// Used to do something to every element in an array
// map method called on the array eg, nums.map()
const mapResults = nums.map(function(num) { return num * 2 });
console.log(mapResults);


// Simplfied w/ map() + arrow function
const arrowResults = nums.map(num => num * 10);
console.log(arrowResults);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

// return an array containing the name and id values of all in students array
const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);
