function fibonacci(num) {
    var num1 = 1;
    var num2 = 1;
    var counter = 3;

    console.log(1);
    if (num == 1){
        return;
    }
    console.log(1);
    while (counter <= num) {
        var numNext = num1 + num2;
        num1 = num2;
        num2 = numNext;
        counter++;
        console.log(numNext);
    }

}