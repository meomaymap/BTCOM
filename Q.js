$(document).ready(function(){
  $("#btn1").click(function(){
    $("p").append(" <b>Appended text</b>.");
  });
  $("#btn2").click(function(){
    $("ol").append("<iframe src='https://www.w3schools.com' title='W3Schools Free Online Web Tutorials'></iframe>");
  });
});
