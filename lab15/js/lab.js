var actButton = document.getElementById("activate");

actButton.addEventListener("click", function(){
  // Using the core $.ajax() method
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://yesno.wtf/api",
    // Whether this is a POST or GET request
    type: "GET"
  })

  //working
  .done(function(data){
    console.log("worked");
    console.log(JSON.stringify(data));
    //display the image
    $("#output").append("<h1>" + data.answer + "</h1>");
    $("#output").append("<img src =" + data.image + ">");
  })

  //not working
  .fail(function(request, error){
    $("#output").html("something broke");
  })
})
