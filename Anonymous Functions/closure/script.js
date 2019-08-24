console.log("##### CLOSURE APPLICATIONS #####");

console.log("-- Check Password App --");

function makePassword(password) {
  return function(passwordGuess) {
    return (passwordGuess === password);
  }
}

var x = makePassword("Ham");

console.log(x("Hams"))

// ################################################# //
console.log("-- Multiply By App --");

function multN(n) {
  return function(n2) {
    return n * n2;
  }
}

var i = multN(10);

console.log(i(15));

// ################################################# //
console.log("-- Counter App --");

function counter() {
  var count = 0;
  var objCount = {
    increment: function() {
      return count = count + 1;
    }
  };
  return objCount;
}

var j = counter();

for (var i = 0; i < 3; i++) {
  console.log(j.increment());
}

// ################################################# //
console.log("-- Cooking App --");

function makeTimer(doneMessage, n) {
  setTimeout(function(){
    console.log(doneMessage);
  }, n);
}

makeTimer("Cookies are done!", 1000);
