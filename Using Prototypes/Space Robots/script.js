//////////////////////////////////////////////////////////////////

// Normal Robot Constructor

function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}

Robot.prototype.zap = function() {
  console.log(`${this.name} zaps you with laser beams!`);
}

///////////////////////////////////////////////////////////////////

// Space Robot Constructor

function SpaceRobot(name, year, owner, homePlanet) {
  this.name = name;
  this.year = year;
  this.owner = owner;
  this.homePlanet = homePlanet;
}

SpaceRobot.prototype = new Robot();

SpaceRobot.prototype.status = "Functioning";

SpaceRobot.prototype.statusReport = function() {
  console.log(`${this.name} is ${this.status}`);
}

SpaceRobot.prototype.selfDestruct = function() {
  if (this.status === "Functioning") {
    status = "Destroyed";
    console.log(`${this.name} will now self destruct.`);
    var that = this;
    var x = 4;
    var timer = setInterval(function(){
      x--;
      if (x === 0) {
        console.log("Boom.");
        clearTimeout(timer);
      } else {
        console.log(`${that.name}: ${x}`);
      }
    }, 500);
  } else {
    console.log(`${this.name} is not functioning.`);
  }
}

//////////////////////////////////////////////////////////////////

// Robot Construction

var robby = new Robot("Robby", 2019, "Miguel");
var zoig = new SpaceRobot("Zoig-66", 2166, "Grittle", "Mars");

robby.zap();
zoig.zap();
zoig.selfDestruct();
//
