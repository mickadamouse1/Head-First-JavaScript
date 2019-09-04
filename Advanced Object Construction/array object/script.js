console.log("Odd Numbers Array:");
var oddNumbers = new Array(3);
oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;
console.log(oddNumbers);

console.log("");

console.log("Odd Numbers Reversed:");
console.log(oddNumbers.reverse());

console.log("");

console.log("Odd Numbers Joined:");
var string = oddNumbers.join(" - ");
console.log(string);

console.log("");

console.log("Are all odd?");
var allOdd = oddNumbers.every(function(x) {
  return ((x % 2) !== 0);
});
console.log(allOdd);
