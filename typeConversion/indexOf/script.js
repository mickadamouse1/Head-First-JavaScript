// INDEX OF //
var phrase = "The Saucy Bandit Put Extra Hot Sauce on His Saucy Axe";

var indexChar = phrase.indexOf("Extra");
console.log(`The word "Extra" begins at the ${indexChar}st character of the phrase.`);
phrase = phrase.split(" ");
var indexWord = phrase.indexOf("Extra") + 1;
console.log(`The word "Extra" is the ${indexWord}th word of the phrase`);
