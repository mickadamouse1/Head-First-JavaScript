function Duck(type, canFly) {
  this.type = type;
  this.canFly = canFly;
}
var brownDuck = new Duck("Brown Duck", true);
console.log(Duck);
console.log(brownDuck);
console.log("\n");


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

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];

console.log(Dog);
console.log(fido);
console.log("\n");

for (var i = 0; i < dogs.length; i++) {
  var size = "small";
  if (dogs[i].weight > 10) {
    size = "large";
  }
  console.log(`Dog: ${dogs[i].name} is a ${size} ${dogs[i].breed}`);
  dogs[i].bark();
}
