var eightball = {
  index: 0,
  advice: ["Yes", "No", "Maybe", "Not A Chance"],
  shake: function() {
      this.index = Math.floor(Math.random() * this.advice.length);
    },
  look: function() {
    return this.advice[this.index];
  }
};

eightball.shake();
console.log(eightball.look());
