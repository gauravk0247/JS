console.log('Welcome to tutorial 14.js');

/*
element selectors in JavaScript
1:Single element selectors
2.Multi element selector
*/

// 1:Single element selectors
let element = document.getElementById('myfirst');
// element = element.className; 
// element = element.childNodes; 
// element = element.parentNode;
element.style.color = 'red';
element.style.background = 'purple';
element.innerText = 'Gaurav is good boy';
element.innerHTML = '<b>Gaurav is good boy</b>';
console.log(element.innerText);

let sel = document.querySelector('#myfirst');  //Use Id Tag
sel = document.querySelector('.child');   //Use Class Tag
sel = document.querySelector('b');   //Use Tag Name
sel = document.querySelector('h1');   //Use Tag Name
console.log(sel);
sel.style.color = 'green';

// 2.Multi element selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems);

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = 'blue';
}

// Array.from(elems).forEach(element => {
//     element.style.color = 'blue';
// });

// console.log(elems[0].getElementsByClassName('child'));
