$(document).ready(function(){
  var mySound = new buzz.sound("glass-break.mp3");
  $("#football").mouseenter(function () {
    $(this).animate({rotate: '200deg', scale: "4.1", left: "690px",top: "340px"}, 550, function(){
         $("#glass").fadeIn("fast");
         mySound.play();
     });
  });
});
        
