$(document).ready(function(){
    $(".mail").hide();
    $(".fa-envelope").click(function(){
      $(".mail").show("slow");
    });
    $("#fa-times2").click(function(){
        $(".mail").hide("slow");
      });
  });