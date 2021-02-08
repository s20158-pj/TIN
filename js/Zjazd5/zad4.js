function I(a){
    var x=document.getElementsByClassName("accordion_down")[a];
    var arr=document.getElementsByClassName("accordion_down");

    for(var i =0;i<arr.length;i++){
        arr[i].style.display="none";
    }
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}