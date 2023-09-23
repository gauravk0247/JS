console.log('Welcome to tutorial 7.js');

let marks = [38,78,85,45,67];
const fruits = ['Orange','Apple','Pineapple'];
const mixed = ['str', 67, [89 ,80]];

const arr = new Array(23,56,89,'Gaurav');
// console.log(arr);
// console.log(mixed);
// console.log(fruits[2]);
// console.log(marks);

// console.log(arr.length);
// console.log(Array.isArray(arr));
arr[0] = 'Patil';
// let arrelement = arr[0];
// console.log('element:', arrelement);
// console.log(arr)

let value = marks.indexOf(67);
// console.log(value);

// Mutating or Modifying arrays
// marks.push(2345);
// marks.unshift(1009);
// marks.shift();
// marks.pop();
// marks.splice(1, 2);
// marks.reverse();
let marks2 = [1,2,3,5,7];
marks = marks.concat(marks2);
// console.log(marks);

let myobj = {
    'first name': 'gaurav',
    college: 'svit',
    isActive: true,
    marks: [1,5,8,9]
}
console.log(myobj);
console.log(myobj.college);
console.log(myobj['college']);