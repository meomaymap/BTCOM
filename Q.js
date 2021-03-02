$(document).ready(function(){
  $("#btn1").click(function(){
    $("p").append(" <b>Appended text</b>.");
  });
  $("#btn2").click(function(){
    $("ol").append("<iframe src='https://meomaymap.github.io/BTCOM/iframe_Ex.html'></iframe>");
  });
});
