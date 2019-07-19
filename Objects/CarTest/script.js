var car = {
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
  fuel: 0,

  start: function() {
    if (this.fuel > 0) {
      this.started = true;
    } else {
      console.log("Can't start without fuel");
    }
  },
  stop: function() {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      if (this.fuel > 0) {
        console.log(`The ${this.make} goes "Zoom zoom!"`);
        this.fuel--;
      } else {
        console.log("No Fuel...");
        this.stop();
      }
    } else {
      console.log("The car isn't on...");
    }
  },
  addFuel: function(amount) {
    this.fuel = this.fuel + amount;
  }
};

car.start();
car.drive();
car.addFuel(2);
car.start();
car.drive();
car.drive();
car.drive();
car.start();
