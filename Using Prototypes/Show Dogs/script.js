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

function ShowDog(name, breed, weight, handler) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.handler = handler;
}

ShowDog.prototype = new Dog();

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function() {
  console.log(`${this.name} stacks!`);
};

ShowDog.prototype.bait = function() {
  console.log(`${this.name} baits!`);
};

ShowDog.prototype.groom = function() {
  console.log(`${this.name} grooms!`);
};

ShowDog.prototype.gait = function(kind) {
  console.log(`${kind}ing`);
}

var scott = new ShowDog("Scott", "Dog", 12, "Jeb");

scott.stack();
scott.bait();
scott.groom();
scott.gait("laugh");
scott.bark();
console.log(scott.league);
console.log(scott.species);

//
