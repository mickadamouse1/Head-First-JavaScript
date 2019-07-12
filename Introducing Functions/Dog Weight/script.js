function dogGoes(name, weight) {
  if (weight < 20) {
    document.write(`${name}, goes "wewf wewf"<br>`);
  } else {
    document.write(`${name}, "WOOF WOOF"<br>`);
  }
}

dogGoes("Jimmy", 16);
dogGoes("Roofus", 26);
