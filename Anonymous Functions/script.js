var secret = "007";

function getSecret() {
  var secret = "008";

  function getValue() {
    return secret;
  }
  return getValue();
}

var sol1 = getSecret();
console.log(sol1);

// function getSecret2() {
//
//   function getValue() {
//     return secret;
//   }
//   return getValue;
// }
//
// var sol2 = getSecret2();
// console.log(sol2());
