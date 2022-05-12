/**
  * Author: Wan Lee Tan and Gavin Concepcion
  * Created: 5/11/2022
**/

//buttons to change the colors
$("button.purple").click(function(){
  		// make it purple
      $("#challenges").removeClass("pink");
      $("#challenges").toggleClass("purple");
      //make it pink
      $("#results").removeClass("purple");
      $("#results").toggleClass("pink");
});

//buttons to change the colors
$("button.pink").click(function(){
  		// make it pink
      $("#challenges").removeClass("purple");
      $("#challenges").toggleClass("pink");
      // make it purple
      $("#results").removeClass("pink");
      $("#results").toggleClass("purple");
});
