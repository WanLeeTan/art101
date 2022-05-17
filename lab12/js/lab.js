/**
  * Author: Wan Lee Tan and Gavin Concepcion
  * Created: 5/16/2022
**/

//return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
function sortingHat(str){
  len = str.length;
  mod = length % 4;
  switch(mod){
    case 0:
      return "Gryffindor";
      break;
    case 1:
      return "Ravenclaw";
      break;
    case 2:
      return "Slytherin";
      break;
    case 3:
      return "Hufflepuff";
      break;
    default:
      return "FUCK";
      console.log("Something Broke");
  }
}

var subButton = document.getElementById("button");

subButton.addEventListener("click", function(){
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat sorted you into " + house + ".</p>";
    document.getElementById("output").innerHTML = newText;
})
