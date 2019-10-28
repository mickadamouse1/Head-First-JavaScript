function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.bark = function() {
  if (this.weight > 25) {
    console.log(`${this.name} goes WOOF WOOF!`);
  } else {
    console.log(`${this.name} goes wewf wewf...`);
  }
}
Dog.prototype.run = function() {
  console.log(`${this.name} Runs!`);
}
Dog.prototype.wag = function() {
  console.log(`${this.name} Wags!`);
}

var fido = new Dog("Fido", "Dog", 38);
var fluffy = new Dog("Fluffy", "Dog", 30);
var spot = new Dog("Spot", "Dog", 10);

spot.bark = function() {
  console.log(`${this.name} goes WOOF WOOF!`);
}

fido.bark();
fluffy.bark();
spot.bark();

fido.run();
fluffy.run();
spot.run();

fido.wag();
fluffy.wag();
spot.wag();
