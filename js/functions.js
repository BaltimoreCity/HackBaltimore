
$(document).ready(function() {
  $("#hide").click(function(){
      $(".participant__form").hide( "blind", {direction: "vertical"}, 1000 );
   });

   $("#show").click(function(){
      $(".participant__form").show( "blind", {direction: "vertical"}, 1000 );
   });
});
