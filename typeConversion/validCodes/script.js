var code1 = {
  number: "9976-9999"
};

var code2 = {
  number: "2217622"
};

var code3 = {
  number: "9f3-1333"
};

var code4 = {
  number: "963-1333"
};

var code5 = {
  number: "963_1333"
};

var arrCodes = [code1, code2, code3, code4, code5];

function checkCode(code) {
  if (code.length === 7) {
    if (isNaN(code.substring(0))) {
      return false;
    }
    return true;
  }

  var split = code.split("-");

  if (split.length == 2 && split[0].length === 3) {
    split = split.join("");
    if (isNaN(split.substring(0)) || split.length > 8) {
      return false
    } else {
      return true;
    }
  }
  return false;
}

function submitCodes(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].isValid = checkCode(arr[i].number);
    arr[i].name = "Code " + i;
    console.log(arr[i]);
  }
}

submitCodes(arrCodes);
