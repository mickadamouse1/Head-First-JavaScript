var affirmativeWords = ["yes", "yeah", "aye", "indeed", "onto", "ye", "yea", "yeas"];
var wordIsGood = false


var reply = prompt("Wanna come?");

for (var i = 0; i < affirmativeWords.length; i++) {
  if (affirmativeWords[i] == reply) {
    wordIsGood = true;
  }
}

if (wordIsGood == false) {
  alert("That's a shame!");
} else {
  alert("Hells Yeah!");
}
