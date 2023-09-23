console.log('We are at tut 6');
const name = 'Gaurav';
const greeting = 'Good Morning';
// console.log(greeting + ' ' + name);

let html;
html = '<h1> This is heading</h1>'+
'<p>This is my paragraph</p>';

html = html.concat('this',' str2');
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html.indexOf('is'));
// console.log(html.lastIndexOf('is'));

// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(8));
// console.log(html.endsWith('str2'));
// console.log(html.startsWith('<h1>'));
// console.log(html.includes('p'));
// console.log(html.substring(1, 5));
// console.log(html.slice(0, 5));
// console.log(html.split('> '));
// console.log(html.replace('this', 'it'));

let fruit1 = 'orange';
let fruit2 = 'apple';
let myhtml = `hello ${name}
              <h1>This is heading </h1>
              <p>You like ${fruit1} and ${fruit2}
              `;
document.body.innerHTML = myhtml;

// Myquiz
let student1 = 'Gaurav';
let student2 = 'Krishna';
let sthtml = `Hello student
<h1>"This is a last year seminar project for you"</h1>
<p>This ${student1} and ${student2} are most powerful students in all programming language`;
document.body.innerHTML = sthtml;