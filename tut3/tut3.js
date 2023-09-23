console.log('Welcome to tut3.js');
// Variables in JS
// 1.let (block level scope)
// 2.const
// 3.var  (global scope)

var myName = 'gaurav';
myName = `gkraja`;
console.log(myName);
var student;
student = 'gaurav';
var marks = 78;
marks = 80;
console.log(student, marks);

// Rules for creating js variables
// 1.Cannot start with numbers
// 2.Can start with letter, _ or $
// 3.Are case sensitive
var city = 'Nashik';
console.log(city);

const stName = 'Darshan';
console.log(stName);
const fruit = 'orange';
console.log(fruit);

{
    let city = 'Sinnar';
    city = 'chas';
    console.log(city);
}
console.log(city);

const arr1 = [28,41,27,40];
arr1.push(20);
arr1.pop();
arr1.shift();
arr1.unshift(21);
arr1.slice(1, 3);
console.log(arr1);

/* Most common Programming case types:

1.camelCase
2.kebab-case
3.snake_case
4.PascalCase
*/