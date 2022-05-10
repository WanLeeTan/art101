/**
  * Author: Wan Lee Tan and Gavin Concepcion
  * Created: 5/04/2022
**/

//find output div and assign it to outputEl
var outputEl = document.getElementById("output");

//create new element
var new1El = document.createElement("p");
var new2El = document.createElement("h1");

//append child for both of them
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//change shit
new1El.style.color = "blue";
new1El.style.marginLeft = "50px";
new2El.style.color = "red";
new2El.style.position = "absolute";
