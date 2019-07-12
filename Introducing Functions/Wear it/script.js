var isOutside = false;

function whatShallIWear(temp, isOutside) {
  if (isOutside) {
    if (temp < 60) {
      document.write("Wear a Jacket<br>");
    } else if (temp < 70) {
      document.write("Wear a Sweater<br>");
    } else {
      document.write("Wear a T-Shirt<br>");
    }
  } else {
    document.write("Wear nothing<br>");
  }
}
whatShallIWear(50, isOutside = true);
whatShallIWear(70, isOutside = true);
whatShallIWear(80, isOutside = false);
whatShallIWear(60, isOutside);
