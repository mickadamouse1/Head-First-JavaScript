var word = "bottles";
var count = 99;

while (count > 0) {
  document.write(`${count} ${word} of beer on the wall. `);
  document.write(`${count} ${word} of beer. <br>`);
  document.write(`Take one down, pass it around. `);
  count--;
  if (count >= 2) {
    document.write(`${count} ${word} of beer on the wall. <br> <br>`);
  } else if (count == 1) {
    word = "bottle"
    document.write(`${count} ${word} of beer on the wall. <br> <br>`)
  } else {
    document.write(`No more bottles of beer on the wall.`);
  };
}
