function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

function ShowDog(name, breed, weight, handler) {
  Dog.call(this, name, breed, weight);
  this.handler = handler;
}

ShowDog.prototype = new Dog();

var fido = new Dog("Fido", "Dog", 38);
var scott = new ShowDog("Scott", "Dog", 12, "Jeb");
scott.constructor = ShowDog;

function checkInstance(dog) {
  if (dog instanceof Dog) {
    console.log(`${dog.name} is a dog`);
  } else {
    console.log(`${dog.name} is not a dog`);
  }

  if (dog instanceof ShowDog) {
    console.log(`${dog.name} is a show dog`);
  } else {
    console.log(`${dog.name} is not a show dog`);
  }
  console.log(`${dog.name}'s constuctor is ${dog.constructor}`);
}

checkInstance(fido);
console.log("\n");
checkInstance(scott);
console.log(scott);
console.log(fido);
//
