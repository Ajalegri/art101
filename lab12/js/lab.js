/*
 * Author: Antonio Alegria <ajalegri@ucsc.edu>
 * Created: 11/9/2022
 * License: Public Domain
 * using a hash function found at https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */

const houseText = ["<p>Gryffindors are associated with daring, bravery, nerve and chivalry. Gryffindors can be cocky and reckless; they are more prone to saying something or getting into a hairy situation before thinking it through than other Hogwarts houses.</p>", "<p>Students in Ravenclaw are noted for their individuality and acceptance of people and things that others would consider weird, as well as their outstanding intelligence. They can also be quirky and possess unusual intellectual interests. While others may be inclined to shun and ridicule such people, Ravenclaws generally accept and celebrate these eccentrics. Though they are often called stuck up, that is not the case.</p>", "<p>Hufflepuffs are associated with trustworthiness, loyalty, and a strong work ethic. Hufflepuff has produced the fewest Dark witches and wizards of any House. Many view Hufflepuff as the least clever or exceptional House, but this is due in part to its members' distaste for boastfulness.</p>", "<p>Slytherins are associated with cunning, ambition and a tendency to look after their own self instead of others. Some other traits include shrewdness and traditionalism. Slytherins are always striving to be the best, something they have in common with Ravenclaws; whether it's in Quidditch or House Points, they will do almost anything to achieve honor and glory.</p>", "<p>you a sloog</p>"];

 function sortingHat(str) {
   const houses = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin", "slug"];
   var mod = hashCode(str) % 5;
   return houses[mod];
 }

 /**
  * Returns a hash code from a string
  * @param  {String} str The string to hash.
  * @return {Number}    A 32bit integer
  * @see http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
  */
 function hashCode(str) {
     let hash = 0;
     for (let i = 0, len = str.length; i < len; i++) {
         let chr = str.charCodeAt(i);
         hash = (hash << 5) - hash + chr;
         hash |= 0; // Convert to 32bit integer
     }
     return hash;
 }

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var newText;
  if (house == "Gryffindor") {
    newText = "<h2>You are now a proud member of " + house + "!</h2>" + houseText[0];
  } else if (house == "Ravenclaw") {
    newText = "<h2>You are now a proud member of " + house + "!</h2>" + houseText[1];
  } else if (house == "Hufflepuff") {
    newText = "<h2>You are now a proud member of " + house + "!</h2>" + houseText[2];
  } else if (house == "Slytherin") {
    newText = "<h2>You are now a proud member of " + house + "!</h2>" + houseText[3];
  } else {
    newText = "<h2>You are a " + house + ".</h2>" + houseText[4];
  }
  document.getElementById("result").innerHTML = newText;
});
