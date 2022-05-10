/**
  * Author: Wan Lee Tan and Gavin Concepcion
  * Created: 5/09/2022
**/

//sorting function
//can also do userName.split("").sort.join("");
function splitSortJoin(userName){
  //string to array
  var nameArray = userName.split("");
  console.log("array = ", nameArray);

  //sort the array
  var arraySort = nameArray.sort();
  console.log("sort = ", arraySort);

  //array to string
  var nameString = arraySort.join("");
  console.log("join = ", nameString);

  //return the sorted string
  return nameString;
}

//make button
var button = document.getElementById("my-button");
console.log("button = ", button);

//button event listener
button.addEventListener("click", function(){
  //get the input value
  var userInput = document.getElementById("my-input").value;
  console.log("userInput = ", userInput);

  //run it through the sorting function
  var sortedOutput = splitSortJoin(userInput);
  console.log("sortedOutput = ", sortedOutput);

  //replace the div id = output with the results
  var output = document.getElementById("output");
  console.log("output = ", output);
  output.innerHTML = "The output is: " + sortedOutput;
});
