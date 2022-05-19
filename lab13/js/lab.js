/**
  * Author: Wan Lee Tan and Gavin Concepcion
  * Created: 5/18/2022
**/

//FizzBuzz function that outputs a phrase depending on the factor of the numbers
function fizzBuzz(maxNum, factorObj){
  //loop through the the numbers
  console.log("function")
  for(var num = 0; num < maxNum; num++){
    console.log("loop")
    //clear the output string
    var output = "";
    //go through the factors
    if(num % factorObj[num0] == 0){
      output += factorObj[text0];
      console.log("text0")
    }

    if(num % factorObj[num1] == 0){
      output += factorObj[text1];
      console.log("text1")
    }

    if(num % factorObj[num2] == 0){
      output += factorObj[text2];
      console.log("text2")
    }

    if(num % factorObj[num3] == 0){
      output += factorObj[text3];
      console.log("text3")
    }

    //format the output
    if(output){
      output = " - " + output + "!";
      console.log("output")
    }
    return output;
  }
}

document.getElementById("button").addEventListener("click", function(){
  var max = document.getElementById("max").value;
  console.log("max = ", max)
  let factorObj = {
    num0: document.getElementById("num0").value,
    text0: document.getElementById("text0"),
    num1: document.getElementById("num1").value,
    text1: document.getElementById("text1"),
    num2: document.getElementById("num2").value,
    text2: document.getElementById("text2"),
    num3: document.getElementById("num3").value,
    text3: document.getElementById("text3")
  };
  newText = fizzBuzz(max, factorObj);
  document.getElementById("output").innerHTML = "<p>" + newText + "</p>";
})
