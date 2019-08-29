console.log("##### FUNCTION MAKER #####");

function functionMaker(num1) {
  var num = num1;
  return function(num2) {
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    return num1 * num2
  }
}

var multiplyBy7 = functionMaker(7);
var multiplyBy5 = functionMaker(5);
var multiplyBy2 = functionMaker(2);
var output = multiplyBy7(2);
var output2 = multiplyBy5(2);
var output3 = multiplyBy2(2);
