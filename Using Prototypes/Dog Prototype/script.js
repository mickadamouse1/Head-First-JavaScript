// var dogPrototype = {
//   species: "Canine",
//
//   bark: function() {
//     console.log("Woof");
//   },
//
//   run: function() {
//     console.log("Run");
//   },
//
//   wag: function() {
//     console.log("Wag");
//   }
// };

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.bark = function() {
  if (this.weight > 25) {
    console.log("WOOF WOOF");
  } else {
    console.log("wewf wewf...");
  }
}
Dog.prototype.run = function() {
  console.log("Run!");
}
Dog.prototype.wag = function() {
  console.log("Wag!");
}

var fido = new Dog("Fido", "Dog", 38);
var fluffy = new Dog("Fluffy", "Dog", 30);
var spot = new Dog("Spot", "Dog", 10);

fido.bark();
fluffy.bark();
spot.bark();

fido.run();
fluffy.run();
spot.run();

fido.wag();
fluffy.wag();
spot.wag();
