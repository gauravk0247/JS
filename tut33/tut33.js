console.log('Welcome to our new JavaScript Project tut33.js');

// constructor
function Book(name, author, type) {
    this.name = name;
    this.name = author;
    this.name = type;
}

// Display Constructor
function Display() {

}

// Add methods to display prototype



// Add submit event listener to form libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    // let display = new Display();
    // display.add(book);
    e.preventDefault();
}