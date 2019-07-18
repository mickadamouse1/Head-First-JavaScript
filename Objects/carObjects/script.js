var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "Red",
  passengers: 2,
  convertible: false,
  mileage: 1021,
  weightLimitKg: 500,
  wheels: 4
};

var taxi = {
  make: "TX4",
  model: "Hackney Carriage",
  year: 2002,
  color: "black",
  passengers: 6,
  convertible: false,
  mileage: 3436,
  weightLimitKg: 1500,
  wheels: 4
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
  wheels: 4
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
  wheels: 4
};


var cars = [chevy, taxi, cadi, fiat];

var miles = cars[Math.floor(Math.random() * cars.length)];
  fiat.needsWashing = true;
  console.log(miles.make);
  console.log("Mileage is " + miles.mileage + "km");
  console.log(miles.needsWashing);
  miles.mileage;
if (miles < 2000) {
  console.log("Buy it!");
} else {
  console.log("Bin it!");
}
