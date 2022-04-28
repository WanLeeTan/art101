/**
  * Author: Wan Lee Tan and Gavin Concepcion
  * Created: 4/27/2022
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

//take user input and return output
function userSort(){
  document.writeln("This program will sort the letters of your username 1 to Z.", "</br>");

  //get the username from the user
  var user = window.prompt("Enter your username: ");
  console.log("username =", user);

  //get the sorted username
  var newUser = splitSortJoin(user);

  //return newuser
  return newUser;
}

//turns out JavaScript does not have a main function wack
//output
document.writeln("Your sorted username: ", userSort(), "</br>");
