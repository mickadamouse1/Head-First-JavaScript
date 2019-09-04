function Widget(partNo, size) {
  this.partNo = partNo;
  this.size = size;
}

function FormFactor(material, widget) {
  this.material = material;
  this.widget = widget;
}

var widgetA = new Widget(100, "large");
var widgetB = new Widget(101, "small");
var formFactorA = new FormFactor("plastic", widgetA);
var formFactorB = new FormFactor("metal", widgetB);

console.log(widgetA);
console.log(widgetB);
console.log(formFactorA);
console.log(formFactorB);
