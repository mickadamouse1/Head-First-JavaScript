var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "Red",
  passengers: 2,
  convertible: false,
  mileage: 1021,
  weightLimitKg: 500,
  wheels: 4,
  started: false,
  start: function() {
    this.started = true;
  },
  stop: function() {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      console.log(`The ${this.make} goes "Zoom zoom!"`);
    } else {
      console.log("The car isn't on...");
    }
  }
};

var taxi = {
  make: "Taxi",
  model: "Hackney Carriage",
  year: 2002,
  color: "black",
  passengers: 6,
  convertible: false,
  mileage: 3436,
  weightLimitKg: 1500,
  wheels: 4,
  started: false,
  start: function() {
    this.started = true;
  },
  stop: function() {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      console.log(`The ${this.make} goes "Zoom zoom!"`);
    } else {
      console.log("The car isn't on...");
    }
  }
};

var cadi = {
  make: "Cadillac",
  model: "GM",
  year: 1955,
  color: "Tan",
  passangers: 5,
  convertible: false,
  mileage: 12892,
  weightLimitKg: 750,
  wheels: 4,
  started: false,
  start: function() {
    this.started = true;
  },
  stop: function() {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      console.log(`The ${this.make} goes "Zoom zoom!"`);
    } else {
      console.log("The car isn't on...");
    }
  }
};

var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passangers: 2,
  convertible: false,
  mileage: 88000,
  weightLimitKg: 1200,
  wheels: 4,
  started: false,
  start: function() {
    this.started = true;
  },
  stop: function() {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      console.log(`The ${this.make} goes "Zoom zoom!"`);
    } else {
      console.log("The car isn't on...");
    }
  }
};

function driveRandomCar() {
  var cars = [fiat, cadi, taxi, chevy];
  var car = cars[Math.floor(Math.random() * cars.length)];
  car.start();
  car.drive();
}

driveRandomCar();

for (var prop in chevy) {
  console.log(`${prop}: ${chevy[prop]}`);
}
