var emot = "       XOxxOOo      ";
var hugs = 0;
var kisses = 0;

emot = emot.trim();
emot = emot.toUpperCase();

for(var i = 0; i < emot.length; i++) {
  if (emot.charAt(i) === "X") {
    kisses++;
  } else if (emot.charAt(i) == "O") {
    hugs++;
  }
}

console.log(emot)
console.log(hugs);
console.log(kisses);
