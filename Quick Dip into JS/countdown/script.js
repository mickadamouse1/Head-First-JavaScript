var scoops = 100;
var myLoopCounter = 0;

function myLoop(){
  setTimeout(function () {
    if (scoops <= 100 && scoops != 0){
      document.write(scoops + "<br>");
      scoops--;
      myLoop();
    } else if (scoops == 0) {
      document.write("No Scoops Left");
    }
  }, 250);
}

myLoop();
