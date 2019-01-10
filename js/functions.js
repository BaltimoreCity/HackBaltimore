
$(document).ready(function() {
  $("#hide-ideas").click(function(){
      $(".ideas__form").hide( "blind", {direction: "vertical"}, 1000 );
      $('html,body').animate({
        scrollTop: $("#ideas").offset().top},
        'slow');
   });

   $("#show-ideas").click(function(){
      $(".ideas__form").show( "blind", {direction: "vertical"}, 1000 );
      $('html,body').animate({
        scrollTop: $("#ideas").offset().top},
        'slow');
   });
});
