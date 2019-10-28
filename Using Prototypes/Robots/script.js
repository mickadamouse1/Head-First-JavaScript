function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}

Robot.prototype.maker = "Gordon's Machines";
Robot.prototype.speak = function() {
  if (this.isOn) {
    console.log(`Hello, my name is ${this.name}. Nice to meet you, ${this.owner}.`);
  } else {
    console.log(`${this.name} isn't on...`);
  }
};
Robot.prototype.makeCoffee = function() {
  if (this.isOn) {
    console.log(`${this.name} is making Coffee.`);
  } else {
    console.log(`${this.name} isn't on...`);
  }
};
Robot.prototype.blinkLights = function() {
  if (this.isOn) {
    console.log("Blink! Blink!");
  } else {
    console.log(`${this.name} isn't on...`);
  }
};
Robot.prototype.onOffSwitch = function() {
  if (this.isOn) {
    console.log(`${this.name} is now off.`);
    this.isOn = false;
  } else {
    console.log(`${this.name} is now on.`);
    this.isOn = true;
  }
};
Robot.prototype.printReceipt = function() {
  console.log(`${this.name} was made by ${this.maker} in ${this.year} and is now owned by ${this.owner}.`);
};

var robby = new Robot("Robby", 2024, "Michael");
var rosie = new Robot("Rosie", 2037, "Albertus-997");

rosie.cleanHouse = function() {
  if (this.isOn) {
    console.log(`${this.name} is cleaning the house.`);
  } else {
    console.log(`${this.name} isn't on...`);
  }
}

rosie.maker = "Gordana Machina-997";

robby.printReceipt();
robby.speak();
robby.onOffSwitch();
robby.speak();
console.log("\n")
rosie.printReceipt();
rosie.speak();
rosie.onOffSwitch();
rosie.speak();
