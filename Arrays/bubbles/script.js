var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 43, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var highest = 0;
for (var i = 0; i < scores.length; i++) {
  if (scores[i] > highest) {
    highest = scores[i];
  }

  console.log(`Bubble Solution #${[i]} score: ${scores[i]}`);
}




console.log(`Number of Bubble tests: ${scores.length}`);
console.log(`Highest Bubble score: ${highest}`);
console.log(`Solutions with highest score: dont know yet :3`);
