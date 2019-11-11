String.prototype.cliche = function() {
  var cliche = ["lock and load", "hottest sauces", "right in my jibs"];
  for (var i = 0; i < cliche.length; i++) {
    var index = this.indexOf(cliche[i]);
    if (index >= 0) {
      return true;
    }
  }
  return false;
};

var text = "Hello, my sweet prince. I see you provide the hottest saucese.";

if (text.cliche()) {
  console.log(`CLICHE ALERT: ${text}`);
}
//
