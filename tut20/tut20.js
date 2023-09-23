console.log('Welcome to tutorial 20.js');
let impArray = ['adrak', 'pyaz', 'bhindi'];

// Add key-value pair inside local storage
localStorage.setItem('Name', 'Gaurav');
localStorage.setItem('Name2', 'Krushna');
localStorage.setItem('Sabzi', JSON.stringify(impArray));

// Clears the entire local storage
// localStorage.clear();

// Clear a particular  key-value pair
localStorage.removeItem('Name2');

// Retrieve an item from the Local Storage 
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name);

sessionStorage.setItem('sessionName', 'Gaurav');
sessionStorage.setItem('sessionName2', 'Krushna');
sessionStorage.setItem('sessionSabzi',JSON.stringify(impArray));
