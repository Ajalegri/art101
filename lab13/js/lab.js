/*
 * Author: Antonio Alegria <ajalegri@ucsc.edu>
 * Created: 11/14/2022
 * License: Public Domain
 */

const maxFactors = 5;

outputEl = document.getElementById("output");

document.getElementById("go").addEventListener("click", function() {
  outputEl.innerHTML = "<h2>Output</h2>";
  console.log("going!");
  var inputMax = document.getElementById("inputMax").value;
  if (inputMax > 10000) {
    var max = 10000;
  } else {
    var max = inputMax;
  }
  console.log("max = " + max);
  fizzy(max, getFactors());
})

function getFactors() {
  var factorArr = {};
  // iterate through the maximum allowed factors
  for (var factor = 0; factor < maxFactors; factor++) {
    // generate strings that match the ids in the html input table
    numId = "num" + factor;
    textId = "text" + factor;
    // grab those values
    numValue = document.getElementById(numId).value;
    textValue = document.getElementById(textId).value;
    // ignore blank values
    if (numValue && textValue) {
      // populate the array using the numId as an index
      factorArr[numValue] = textValue;
    }
  }
  return factorArr;
}

function fizzy(maxNum, factorArr) {
  // iterate over all of our numbers
  for (var num = 1; num <= maxNum; num++) {
    // reset output string
    var outputStr = "";
    // iterate over the factors from the user
    for (var factor in factorArr) {
      // check to see if this num is a multiple of factor
      if (num % factor == 0) {
        // add the text to the output string
        outputStr += factorArr[factor]
      }
    }
    // format the string
    if (outputStr != "") {
      outputStr = num + " - " + outputStr + "!";
    }
    output(outputStr);
  }
}

function output(str) {
  newEl = document.createElement("p");
  newEl.innerHTML = str;
  outputEl.appendChild(newEl);
}
