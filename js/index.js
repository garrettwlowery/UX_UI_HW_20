$(".aboutMe").mouseover(function(){
    $(".aboutMe").css("font-weight", "bold");
});
$(".aboutMe").mouseout(function(){
    $(".aboutMe").css("font-weight", "normal");
});
$(".work").mouseover(function(){
    $(".work").css("font-weight", "bold");
    $("#panel").slideDown("slow");
});
$(".work").mouseout(function(){
    $(".work").css("font-weight", "normal");
    $("#panel").slideUp("slow");
});
$(".contact").mouseover(function(){
    $(".contact").css("font-weight", "bold");
});
$(".contact").mouseout(function(){
    $(".contact").css("font-weight", "normal");
});
$(".resume").mouseover(function(){
    $(".resume").css("font-weight", "bold");
});
$(".resume").mouseout(function(){
    $(".resume").css("font-weight", "normal");
});
