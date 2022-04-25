/**
  * Author: Wan Lee Tan and Gavin Concepcion
  * Created: 4/24/2022
**/

// define variables
make = "Ford";
model = "Taurus";
color = "Rusty";
year = 1995;
ownIt = true;

// calculate
age = 2019 - year;

// define arrays and objects
myTransport = ["car", "walking", "bus"];
myMainRide = {make, model, color, year, age};

// output
document.writeln("Kinds of transportation I use: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
