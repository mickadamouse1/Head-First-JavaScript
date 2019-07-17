var scores = [50, 60, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 43, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29]

function findHighestScore() {
  var highest = 0;
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
    }
    console.log(`Bubble Solution #${[i]} score: ${scores[i]}`);
  }
  return highest;
}

function indexOfHighestScore() {
  var highestScores = []
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highest) {
      highestScores.push(i);
    }
  }
  return highestScores;
}

function getMostCostEffective() {
  var cost = 100;
  var index;
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highest) {
      if (costs[i] < cost) {
        cost = costs[i];
        index = i;
      }
    }
  }
  return index;
}

var highest = findHighestScore();
var highestScores = indexOfHighestScore();
var cheapest = getMostCostEffective();

console.log(`Number of Bubble tests: ${scores.length}`);
console.log(`Highest Bubble score: ${highest}`);
console.log(`Solutions with highest score: ${highestScores[0]} & ${highestScores[1]}`);
console.log(`The cheapest bubble solution is ${cheapest}`);
