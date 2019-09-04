function dogCatcher(obj) {
  if (obj instanceof Dog) {
    return true;
  } else {
    return false;
  }
}

function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

var meow = new Cat("Meow", "Siamese", 10);
var whiskers = new Cat("Whiskers", "Mixed", 12);

var fido = {
  name: "Fido",
  breed: "Mixed",
  weight: 38
};

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  this.bark = function() {
    if (this.weight > 25) {
      console.log(`\n${this.name} goes WOOF!\n`)
    } else {
      console.log(`\n${this.name} goes wewf wewf!\n`);
    }
  }
}

var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [meow, whiskers, fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
  if (dogCatcher(dogs[i])) {
    console.log(`${dogs[i].name} is a dog!`);
  }
}
