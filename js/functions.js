
$(document).ready(function() {
   $("#hide-ideas").click(function(e){
       e.preventDefault();
       $(".ideas__form").hide( "blind", {direction: "vertical"}, 1000 );
       $('html,body').animate({
         scrollTop: $("#ideas").offset().top},
         'slow');
   });

  $('#show-ideas').click(function(e) {
    e.preventDefault()
    window.open('https://portal.hackbaltimore.io/', '_blank')
  })

   $("#hide").click(function(e){
       e.preventDefault();
       $(".participant__form").hide( "blind", {direction: "vertical"}, 1000 );
       setTimeout(() => {
        $("#show").show()
        $("#hide").hide()
       }, 1000);
   });

   $("#show").click(function(e){
       e.preventDefault();
       $(".participant__form").show( "blind", {direction: "vertical"}, 1000 );
       setTimeout(() => {
        $("#show").hide()
        $("#hide").show()           
       }, 1000);
   });
});
