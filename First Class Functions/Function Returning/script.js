var passengers = [{name: "Jane Doloop", paid: true, ticket: "coach"},
                  {name: "Dr. Evel", paid: true, ticket: "firstclass"},
                  {name: "Sue Property", paid: false, ticket: "firstclass"},
                  {name: "John Funcall", paids: true, ticket: "premium"}];

function checkNoFlyList(passenger) {
  return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
  return (!passenger.paid);
}

function printPassenger(passenger) {
  console.log(`\nPassenger Name: ${passenger.name}`);
  console.log(`${passenger.name} Paid: ${passenger.paid}`);
  console.log(`${passenger.name} NoFly: ${passenger.name === "Dr. Evel"}`);
}

function createDrinkOrder(passenger) {
  var orderFunction;
  if (passenger.ticket === "firstclass") {
    orderFunction = function() {
      console.log("Would you like a cocktail or wine?");
    }
  } else if (passenger.ticket === "coach") {
    orderFunction = function() {
      console.log("Your choice is cola or water?");
    }
  } else if (passenger.ticket === "premium") {
    orderFunction = function() {
      console.log("Would you like a Beer or Cider?");
    }
  }
  return orderFunction;
}

function createFoodOrder(passenger) {
  var orderFunction;
  if (passenger.ticket === "firstclass") {
    orderFunction = function() {
      console.log("Would you like Chicken or Pasta?");
    }
  } else if (passenger.ticket === "coach") {
    orderFunction = function() {
      console.log("Your choice is Peanuts or Pretzels?");
    }
  } else if (passenger.ticket === "premium") {
    orderFunction = function() {
      console.log("Would you like a Snack Box or Cheese Plate?");
    }
  }
  return orderFunction;
}

function serveCustomer(passenger) {
  var getDrinkOrderFunction = createDrinkOrder(passenger);
  var getFoodOrderFunction = createFoodOrder(passenger);
  getDrinkOrderFunction();
  getDrinkOrderFunction();
  getFoodOrderFunction();
  getDrinkOrderFunction();
}

function processPassengers(passengers, testFunction) {
  for (var i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false
    }
  }
  return true;
}

processPassengers(passengers, serveCustomer);
