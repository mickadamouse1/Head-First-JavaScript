console.log("##### THE CAR FACTORY #####");

function Car(params) {
  this.make = params.make;
  this.model = params.model;
  this.year = params.year;
  this.color = params.color;
  this.passengers = params.passengers;
  this.convertible = params.convertible;
  this.mileage = params.mileage;
  this.started = false;

  this.start = function() {
    this.started = true;
  }

  this.stop = function() {
    this.started = false;
  }

  this.drive = function() {
    if (this.started === true) {
      console.log(`\nThe ${this.color} ${this.make} ${this.model} goes zoom zoom!\n `);
    } else {
      console.log("Start the car first...");
    }
  }
}

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.bark = function() {
    if (weight > 25) {
      console.log(`${this.name} says Woof!`);
    } else {
      console.log(`${this.name} says Yip!`);
    }
  }
}

var chevyParams = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "Red",
  passengers: 2,
  convertible: false,
  mileage: 1021
};

var fiatParams = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000
};

var cadiParams = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  color: "Tan",
  passengers: 5,
  convertible: false,
  mileage: 12892
};

var taxiParams = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "Yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341
};

var limoParams = {
  make: "Webville Motors",
  model: "Limo",
  year: 1983,
  color: "Black",
  passengers: 12,
  convertible: true,
  mileage: 21120
}


var chevy = new Car(chevyParams);
var fiat = new Car(fiatParams);
var cadi = new Car(cadiParams);
var taxi = new Car(taxiParams);
var limo = new Car(limoParams);
var limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);
var cars = [chevy, fiat, cadi, taxi, limo];

for (var i = 0; i < cars.length; i++) {
  cars[i].start();
  cars[i].drive();
}

console.log(`${limo.make} ${limo.model} is a ${typeof limo}`);
console.log(`${limoDog.name} is a ${typeof limoDog}`);

if (cadi instanceof Car) {
  console.log("Cadi is a car.");
};
