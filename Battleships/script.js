var attackScript = document.createElement("script");
attackScript.src = "attack.js";
document.head.appendChild(attackScript);
var arrCells = [];
for (var i = 0; i < 64; i++) {
  arrCells[i] = i + 1
}

var ship1 = {
  assignLoc: function() {
    this.loc1 = generateHorizPos();
    this.loc2 = this.loc1 + 1;
  }
};

var ship2 = {
  assignLoc: function() {
    this.loc1 = arrCells[Math.floor(Math.random() * 56)];
    this.loc2 = this.loc1 + 8;
    adjustPos();
  }
};

function generateHorizPos() {
  var a = Math.floor(Math.random() * 7) + 1;
  var b = a + 8;
  var c = b + 8;
  var d = c + 8;
  var e = d + 8;
  var f = e + 8;
  var g = f + 8;
  var h = g + 8;
  var arr = [a, b, c, d, e, f, g, h];
  return arr[Math.floor(Math.random() * 8)];
}

function adjustPos() {
  if (ship2.loc1 == ship1.loc1 || ship2.loc1 == ship1.loc2 || ship2.loc2 == ship1.loc1 || ship2.loc2 == ship1.loc2) {
    ship2.loc1 = ship1.loc2 + 1;
    ship2.loc2 = ship2.loc1 + 8;
    console.log("moved");
    if (ship2.loc1 > 54) {
      ship2.loc1 = ship1.loc1 - 9;
      ship2.loc2 = ship2.loc1 + 8;
    }
  }
}

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
  } else if (ship1cell <= 64) {
    ship1cell = "h" + (ship1cell - 56);
  }
  document.getElementById(ship1cell.toString()).classList.add("ship");
}

function checkHit(cell, id) {
  if (cell == ship1.loc1 || cell == ship1.loc2 || cell == ship2.loc1 || cell == ship2.loc2) {
    console.log("hit");
    id.classList.add("hit");
    id.innerHTML = "Hit";
  } else {
    console.log("Attacked cell " + cell + " and missed");
    id.classList.add("miss");
    id.innerHTML = "Miss";
  }
}

ship1.assignLoc();
ship2.assignLoc();

displayShips(ship1.loc1);
displayShips(ship1.loc2);
displayShips(ship2.loc1);
displayShips(ship2.loc2);

console.log(ship1.loc1, ship1.loc2);
console.log(ship2.loc1, ship2.loc2);
