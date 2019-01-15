
$(document).ready(function() {

   $("#hide-ideas").click(function(e){
       e.preventDefault();
       $(".ideas__form").hide( "blind", {direction: "vertical"}, 1000 );
       $('html,body').animate({
         scrollTop: $("#ideas").offset().top},
         'slow');
   });

   $("#show-ideas").click(function(e){
       e.preventDefault();
       $(".ideas__form").show( "blind", {direction: "vertical"}, 1000 );
       $('html,body').animate({
         scrollTop: $("#ideas").offset().top},
         'slow');
   });

   $("#hide").click(function(){
       $(".participant__form").hide( "blind", {direction: "vertical"}, 1000 );
   });

   $("#show").click(function(){
       $(".participant__form").show( "blind", {direction: "vertical"}, 1000 );

   });
});
