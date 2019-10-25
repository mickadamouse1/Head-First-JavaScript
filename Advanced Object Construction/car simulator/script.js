
var txtOutput = document.getElementById("txtOutput");

function CarPrototype() {
  this.make = "Webville Motors";
  this.year = 2013;
  this.fuel = 0;
  this.started = false;
  //////////////////////////////////////////////
  this.start = function() {
    if (this.fuel <= 0) {
      txtOutput.innerHTML = "Car has no fuel...";
    } else {
      if (this.started) {
        txtOutput.innerHTML = ("The car is already on...");
      } else {
        this.started = true;
        txtOutput.innerHTML = ("The car is on.");
      }
    }
  }
  /////////////////////////////////////////////
  this.stop = function() {
    if (this.started) {
      this.started = false;
      txtOutput.innerHTML = "The car is now off.";
    } else {
      txtOutput.innerHTML = "The car is already off...";
    }
  }
  /////////////////////////////////////////////
  this.drive = function() {
    if (this.started) {
      txtOutput.innerHTML = "Zoom Zoom!";
      this.fuel = this.fuel - 10;
      if (this.fuel <= 0) {
        this.fuel = 0;
        this.started = false;
        txtOutput.innerHTML = "Fuel has ran out...";
      }
      txtFuel.innerHTML = (`Fuel: ${this.fuel}`);
    } else {
      txtOutput.innerHTML = "Start the car first...";
    }
  }
  ////////////////////////////////////////////
  this.refuel = function() {
    if (this.started) {
      txtOutput.innerHTML = "Turn off the car first.";
    } else {
      if (this.fuel >= 100) {
        txtOutput.innerHTML = "Fuel tank is full.";
      } else {
        txtOutput.innerHTML = "25L of Fuel Added";
        this.fuel = this.fuel + 25;
        if (this.fuel > 100) this.fuel = 100;
      }
    }
    txtFuel.innerHTML = (`Fuel: ${this.fuel}`);
  }
}

var car = new CarPrototype();

btnStart.onclick = function() {
  car.start();
}

btnStop.onclick = function() {
  car.stop();
}

btnDrive.onclick = function() {
  car.drive();
}

btnRefuel.onclick = function() {
  car.refuel();
}
