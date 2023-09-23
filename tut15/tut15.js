console.log('Welcome to tutorial 15.js');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[9].nodeType;
console.log(nodeName);
console.log(nodeType);

// Node Types
// 1.Element
// 2.Attribute
// 3.Text Node
// 8.Comment
// 9.document
// 10.docType

// console.log(cont.childNodes);
// console.log(cont.children);
// console.log(cont.parentNode);
// console.log(cont.nodeName);

let container = document.querySelector('div.container');
// console.log(container.childNodes);
// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount);  //Count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);