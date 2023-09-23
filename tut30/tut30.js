console.log("This is a Tutorial 30.js");

const proto = {
    slogan: function () {
        return `This comapny is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// // This create gaurav object
const gaurav = Object.create(proto);
gaurav.name = "patil";
gaurav.role = "Programmer";
// gaurav.changeName("Gaurav2");
// console.log(gaurav);

// This also creates gaurav object
const gaurav1 = Object.create(proto, {
    name: { value: "gaurav2", writable: true },
    role: { value: "Programmer" },
})

// gaurav1.changeName("Gaurav2");
// console.log(gaurav1);

function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This Comapny is the best Regards, ${this.name}`;
}
let gauravObj = new Employee("Gaurav", 567835, 78);
console.log(gauravObj.slogan());

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let krish = new Programmer("krish", 2, 0, "JavaScript");
console.log(krish);