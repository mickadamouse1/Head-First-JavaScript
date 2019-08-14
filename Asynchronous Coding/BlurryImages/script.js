window.onload = init();
function init() {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].onmouseover = showAnswer;
  }
}

function showAnswer(eventObj) {
  var image = eventObj.target;
  var name = image.id;
  var timerStarted = false;
  image.src = "images/" + name + ".jpg";
  setTimeout(reblur, 2000, image, name);
}

function reblur(image, name) {
  image.src = "images/" + name + "blur.jpg";
}
