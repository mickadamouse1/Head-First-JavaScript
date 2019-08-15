var passengers = [{name: "Jane Doloop", paid: true},
                  {name: "Dr. Evel", paid: true},
                  {name: "Sue Property", paid: false},
                  {name: "John Funcall", paids: true}];

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

function processPassengers(passengers, testFunction) {
  for (var i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false
    }
  }
  return true;
}

processPassengers(passengers, printPassenger);
