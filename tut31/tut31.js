console.log('This is tutorial 31.js');

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan() {
        return `I am ${this.name} and this company is the best`;
    }
    joiningYear() {
        return 2020 - this.experience;
    }
    static add(a, b) {
        return a + b;
    }
}

class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, language, github) {
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage() {
        if (this.language == 'python') {
            return 'Python';
        }
        else {
            return 'JavaScript';
        }
    }
    static multiply(a, b) {
        return a * b;
    }
}
// gaurav = new Employee("Gaurav", 4, "Division");
// console.log(gaurav.joiningYear());

// console.log(Employee.add(32, 4));
krushna = new Programmer("Krushna", 2, "Lays", "Go", "Krushna02");
console.log(krushna);
console.log(krushna.favoriteLanguage());
console.log(Programmer.multiply(3, 2));