$(function(){

    // if ($("#navbar").is(":visible")){
    //     console.log("dupa");
    //         $("#burger_icon").click(function (){
    //             $("#navbar").css("display", "block");
    //     })
    // } else {
    //     $("#burger_icon").click(function (){
    //         $("#navbar").css("display", "none");
    //     })
    // }

    $("#burger_icon").click(function (){
        if ($("#navbar").is(":visible")){
            $("#navbar").css("display", "none");
        } else {
            $("#navbar").css("display", "block");
        }

    })
})