/**
  * Author: Wan Lee Tan and Gavin Concepcion
  * Created: 5/02/2022
**/

//declare the array
array = [100, 81, 4, 16, 42, 144, 35];

//squaring function
function square(x){
    return (x * x);
}

//array for squared values
sqrArr = array.map(square);

//anon function array
anonArr = array.map(function(x){
    return x + x;
});

//print out arraymap
console.log("array map: ", array);

//print out array map squared
console.log("array map squared: ", sqrArr);

//print out anon function results
console.log("anon function results: ", anonArr);

//print to screen
document.writeln("Default Array: ", array, "</br>");
document.writeln("Squared Array: ", sqrArr, "</br>");
document.writeln("Anon Function Array: ", anonArr, "</br>");
