window.onload = init();
function init() {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
  }
}

function showAnswer(eventObj) {
  var image = eventObj.target;
  var name = image.id;
  if (image.getAttribute("src") === "images/" + name + "blur.jpg"){
    image.src = "images/" + name + ".jpg";
  } else if (image.getAttribute("src") === "images/" + name + ".jpg") {
    image.src = "images/" + name + "blur.jpg";
  }
}
