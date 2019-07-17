

function makePhrase() {


  var words1 = ["Hot", "Thicc", "Fat", "Cold", "Slick"];
  var words2 = ["Saucy", "Hairy", "Saggy", "Bootie", "Eyeless"];
  var words3 = ["Momma"];

  var rand1 = Math.floor(Math.random() * words1.length);
  var rand2 = Math.floor(Math.random() * words2.length);
  var rand3 = Math.floor(Math.random() * words3.length);

  var phrase = `Say hello to your ${words1[rand1]} ${words2[rand2]} ${words3[rand3]}`;
  console.log(phrase);
}

makePhrase();
