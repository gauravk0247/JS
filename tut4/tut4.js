console.log('We are at tut4.js');

// Data Types in JS
// 1.Primitive data types
// 2.Reference data types

// 1.Primitive data types
// 1.string
// 2.number
// 3.boolean
// 4.null
// 5.undefined
// 6.Symbole

// String
let myName = 'Gaurav';
console.log('my data type is' + ' '+ (typeof myName));

// Number
let a = 23;
console.log(a,(typeof a));

// Boolean
let isDrive = false;
console.log(isDrive, (typeof isDrive));

// Null
let n = null;
console.log(n,(typeof n));

// Undefined
let undef = undefined;
console.log(undef,(typeof undef));

// 2.Reference data types
// 1.Array
// 2.Object-literals
// 3.Function
// 4.Date

// Array
let myArr = [1,5,7,9,"string"];
console.log(myArr,(typeof myArr));

// Object-Literals
let stMarks = {
    gaurav: 89,
    darshan: 90,
    krushna: 88,
    ritik: 78
}
console.log(stMarks,(typeof stMarks));

// Functions
function findName() {
    
}
console.log(findName,(typeof findName));

// Date
let date = new Date();
console.log(date,(typeof date));