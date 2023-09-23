console.log('Welcomw to tutorial 25.js');

/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item.whenever user clicks away (blur). save the note into the local storage
*/

let divElem = document.createElement('div');

// Add text to that created element
let val = localStorage.getItem('text');
let text;
if (val == null){
    text = document.createTextNode('This is my elements. click to edit it');
}
else{
    text = document.createTextNode(val);
 
}
divElem.appendChild(text);

// Give element id, style, and class
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border: 2px solid red; width: 154px; margin:34px; padding:23px;');

// Grab the element before element with id first
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');

// Insert the elements before elements with id first
container.insertBefore(divElem, first);
console.log(divElem, container, first);

// Add eventlistener to the divElem
divElem.addEventListener('click', function() {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas == 0){
        let html = elem.innerHTML;
        divElem.innerHTML = `<textarea id="textarea" class="textarea" rows="3">${html}</textarea>`;
    }
    // Listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
});

