
// THREE TWO CELL-LONG BATTLESHIPS

var arrCells = [];
for (var i = 0; i < 64; i++) {
  arrCells[i] = i + 1
}

while (arrCells.length > 54){
  var x = 7;
  var ship1Limit = arrCells.splice(x, 1);
  var arrShipLimit = [];
  arrShipLimit.push(ship1Limit);
  x = x + 8;
  console.log("ship 1 limit is " + arrShipLimit);
}


console.log(arrCells);

var ship1 = {
  assignLoc: function() {
    this.loc1 = arrCells[Math.floor(Math.random() * 64)];
    this.loc2 = this.loc1 + 1;
  }
}

var ship2 = {
  assignLoc: function() {
    this.loc1 = arrCells[Math.floor(Math.random() * 64)];
    this.loc2 = this.loc1 + 8;
    if (this.loc1 == ship1.loc1 || this.loc2 == ship1.loc1) {
      this.loc1--;
      this.loc2--;
      console.log(`This ship moved from ${this.loc1 + 1} to ${this.loc1}.`);
    } else if (this.loc1 == ship1.loc2 || this.loc2 == ship1.loc2) {
      this.loc1++;
      this.loc2++;
      console.log(`This ship moved from ${this.loc1 - 1} to ${this.loc1}.`);
    }
  }
}

ship1.assignLoc();
ship2.assignLoc();

console.log(ship1.loc1, ship1.loc2);
console.log(ship2.loc1, ship2.loc2);

function displayShips(shipLoc) {
  ship1cell = shipLoc;
  if (ship1cell < 9) {
    ship1cell = "a" + ship1cell;
  } else if (ship1cell < 17) {
    ship1cell = "b" + (ship1cell - 8);
  } else if (ship1cell < 25) {
    ship1cell = "c" + (ship1cell - 16);
  } else if (ship1cell < 33) {
    ship1cell = "d" + (ship1cell - 24);
  } else if (ship1cell < 41) {
    ship1cell = "e" + (ship1cell - 32);
  } else if (ship1cell < 49) {
    ship1cell = "f" + (ship1cell - 40);
  } else if (ship1cell < 57) {
    ship1cell = "g" + (ship1cell - 48);
  } else if (ship1cell < 64) {
    ship1cell = "h" + (ship1cell - 56);
  }
  document.getElementById(ship1cell.toString()).classList.add("miss");
}

function checkHit(cell, id) {
  if (cell == ship1.loc1 || cell == ship1.loc2 || cell == ship2.loc1 || cell == ship2.loc2) {
    console.log("hit");
  } else {
    console.log("miss");
    id.classList.add("miss");
    id.innerHTML = "miss";
  }
}

e1.onclick = function () {
  checkHit(43, e1);
};

displayShips(ship1.loc1);
displayShips(ship1.loc2);
displayShips(ship2.loc1);
displayShips(ship2.loc2);
