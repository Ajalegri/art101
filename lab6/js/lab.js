/*
 * Author: Antonio Alegria <ajalegri@ucsc.edu>
 * Created: 2022/10/20
 * License: Public Domain
 */

// Define Variables
myTransport = ["Walking", "Bus", "Friend's Car"];

myMainRide = {
  make : "Mazda",
  model : "Miata",
  color : "Red",
  year : 1996,
  age : 2022 - this.year
}

//output
document.writeln("How I get around: ", myTransport, "</br>");
document.writeln("The car I wish I had: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
