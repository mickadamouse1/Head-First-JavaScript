window.onload = function() {
  var count = 0;
  var btnClick = document.getElementById("btnClick");
  var txtMessage = document.getElementById("message");

  btnClick.onclick = function(){

    if (count >= 9) {
      txtMessage.innerHTML = `Good Job!`;
    } else {
      count++;
      txtMessage.innerHTML = "You clicked me " + count + " times!";
    }
  }
}
