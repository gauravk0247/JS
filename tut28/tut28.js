console.log('This is tutorial 28.js');

// Object literal : Object.prototype
let obj = {
    name: "Gaurav",
    branch: "Computer",
    cls: "Third-Year"
}
function Obj(givenName) {
   this.name = givenName
}

Obj.prototype.getName = function() {
    return this.name;
}

Obj.prototype.setName = function(newName) {
    this.name = newName;
}

let obj2 = new Obj("Patil");
console.log(obj2);