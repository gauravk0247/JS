console.log('We are at tut5.js');
// Type conversion and type coercion

// Type conversion
let myVar;
myVar = String(45);
console.log(myVar,(typeof myVar));

let booleanVar = String(true);
console.log(booleanVar,(typeof booleanVar));

let date = String(new Date());
console.log(date,(typeof date));

let arr = String([23,28,45,78,90]);
console.log(arr.length,(typeof arr));

let i = 9;
console.log(i.toString());

let stri = Number('3423');
stri = Number('34656gh');
stri = Number(true);
stri = Number([1,4,6,8,9,5]);
console.log(stri, (typeof stri));


let number = parseFloat('34.098');
console.log(number.toFixed(2), (typeof number));

//  Type coercion
let mystr = Number('456');
let mynum = 28;
console.log(mystr + mynum);