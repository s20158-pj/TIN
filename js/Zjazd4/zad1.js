function isPythagorean(num1, num2, num3) {
    let numbers = [num1, num2 ,num3].sort((a, b) => a-b );
    
    return Math.pow(numbers[0], 2) + Math.pow(numbers[1], 2) === Math.pow(numbers[2], 2);
}