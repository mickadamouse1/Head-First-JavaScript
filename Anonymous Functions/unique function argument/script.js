var arr = ["cookies", "cake"];

(function run(food) {
  if (food === "cookies") {
    console.log("More Please...");
  } else if (food === "cake") {
    console.log("Yum Yum!");
  }
})(arr[Math.floor(Math.random() * 2)]);
