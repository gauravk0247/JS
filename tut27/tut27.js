console.log('We are at tut27.js');

// Object Literal for creating objects
let car = {
    name: 'Maruti 800',
    topSpeed: '89',
    run: function () {
        console.log("Car ir running");
    }
}
// We have already seen constructors is like this
// new Date();

// Creating a constructors for cars
function generalCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyze = function(){
        console.log(`This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`);
    }
}
car1 = new generalCar('Nissan', 180);
car2 = new generalCar('Maruti Alto', 80);
car3 = new generalCar('Mercedes', 200);
console.log(car1, car2, car3);