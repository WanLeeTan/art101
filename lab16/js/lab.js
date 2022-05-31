/**
  * Author: Wan Lee Tan and Gavin Concepcion
  * Created: 5/30/2022
**/

var actButton = document.getElementById("activate");

actButton.addEventListener("click", function(){
  // Using the core $.ajax() method
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // Whether this is a POST or GET request
    type: "GET"
  })

  //working
  .done(function(data){
    console.log("worked");
    console.log(JSON.stringify(data));
    //display the image
    $("#output").append("<h1>" + data.title + "</h1>");
    $("#output").append("<img src =" + data.img + ">");
    $("#output").append("<p>" + data.alt + "</p>");
  })

  //not working
  .fail(function(request, error){
    $("#output").html("something broke");
  })
})
