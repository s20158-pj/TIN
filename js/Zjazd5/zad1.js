$(function(){

    $("#button_DOM_1").click(function (){
        $("#div_DOM_container").append('<div>');
        $("#div_DOM_container div").last().attr("class", "div_DOM");
    })

    $("#button_DOM_2").click(function (){
        $("#div_DOM_container").children().first().remove();
    })

    $("#button_DOM_3").click(function (){
        $("#div_DOM_container div").eq(2).css("background", "green");
    })

    $("#button_DOM_4").click(function (){
        $("#div_DOM_container div").text("Nowy tekst.");
    })
})