console.log('Welcomw to tutorial 24.js');

let date = new Date();
// console.log(date);
let otherDate = new Date('8-4-2003');
otherDate = new Date('June 13 1910');
otherDate = new Date('01/03/1990');
console.log(otherDate)
let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMonth();
a = otherDate.getFullYear();
a = otherDate.getHours();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getMilliseconds();
console.log(a);

otherDate.setDate(11);
otherDate.setMonth(11);
otherDate.setFullYear(11);
otherDate.setHours(01);
otherDate.setMinutes(02);
otherDate.setSeconds(30);
console.log(otherDate);