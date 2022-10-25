/*
 * Author: Antonio Alegria <ajalegri@ucsc.edu>
 * Created: 10/24/2022
 * License: Public Domain
 * Using an implementation of the Durstenfeld shuffle from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */

// randomizeUserName: Takes user input and randomizes it, capitalizing it properly and removing spaces.
function randomizeUserName() {
  // Take user name, convert to lowercase, and remove spaces
  var userName = window.prompt("Your name sucks. Give it to me so I can fix it.");
  userName = userName.replace(/\s/g, '').toLowerCase();
  console.log("userName = ", userName);

  // convert string into array
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);

  // randomize
  var nameArrayRandom = nameArray;
  for (let i = nameArrayRandom.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nameArrayRandom[i], nameArrayRandom[j]] = [nameArrayRandom[j], nameArrayRandom[i]];
  }
  console.log("nameArrayRandom = ", nameArrayRandom);

  // convert array back into string, capitalize first letter
  var nameRandom = nameArrayRandom.join('');
  nameRandom = nameRandom.charAt(0).toUpperCase() + nameRandom.slice(1);
  console.log("nameRandom = ", nameRandom);

  return nameRandom;
}

// Output
document.writeln(randomizeUserName(), "</br>");
