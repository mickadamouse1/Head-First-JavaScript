
var flavours = ["Vanilla", "Butterscotch", "Lavender", "Chocolate", "Cookie Dough"];
flavours[2] = "Vanilla Chocolate Chip";
var flavourOfTheDay = flavours[2];
console.log(flavours.length);

var products = ["Rice", "Ham", "Sauce", "Pickles", "Chips", "Sosig", "Eggs"];
var first = products.length - products.length;
var middle = Math.floor(products.length / 2);
var last = products.length - 1;
var firstProduct = products[first];
var middleProduct = products[middle];
var lastProduct = products[last];
console.log(`There are ${products.length} products currently in stock.`)
console.log(`The First Product Produced was the ${firstProduct}`);
console.log(`The Middle Product Produced was the ${middleProduct}`);
console.log(`The Last Product Produced was the ${lastProduct}`);
