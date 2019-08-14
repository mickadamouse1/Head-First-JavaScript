window.onload = init;

function init() {
  var map = document.getElementById("map");
  var aim = document.getElementById("aim");
  map.onmousemove = showCoords;
}

function showCoords(e) {
  var coords = document.getElementById("coords");
  var aim = document.getElementById("aim");
  var x = e.clientX - 455;
  var y = e.clientY - 77;
  aim.style.left = x + "px";
  aim.style.top = y + "px";
  coords.innerHTML = (`Map coordinates: ${x}x ${y}y`);
}
